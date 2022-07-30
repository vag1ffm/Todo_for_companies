import React, {useEffect} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import {Get_Me, GetGroups} from "./actions/todos";
import PropTypes from "prop-types";
import Groups from "./components/Groups";
import {logEntryPolyfills} from "@babel/preset-env/lib/debug";
import {Link} from "react-router-dom";


const mapStateToProps = (props) => ({
    listgroup: props.todos.list
});

const Home = (props) => {
    let propTypes = {
        Get_Groups: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired,
    };

    let me
    me = props.Get_Me()

    useEffect(() => {
        props.GetGroups()

    }, [])
    let Iamowner,
        Iammember

    if (props.listgroup !== undefined) {
        Iamowner =  props.listgroup.groups[1]
        Iammember = props.listgroup.groups[0]
    }
    console.log(Iamowner)


    let clean = {}

    if (Iamowner !== undefined) {
        for (let j of Iamowner) {
            clean[j.id] = j.group_title
        }
    }

    if (Iammember !== undefined) {
        for (let j of Iammember) {
            clean[j.group] = j.group_title
        }
    }
    console.log(clean)




    function CheckAcc() {
        if (localStorage.getItem('token') === null) {
            return (
                <h5>У вас нет тудушек =( <br/> <Link to={'/login/'}>Войдите</Link> в свой аккаунт или же <Link to={'/register/'}>зарегистрируйтесь </Link> чтобы добавить ʕ•́ᴥ•̀ʔっ♡</h5>
            )

        } else {
            return (
                <div>
                    {Object.keys(clean).map((item, index) => (<Groups
                        chosengroup={props.chosengroup}
                        setChosenGroup={props.setChosenGroup}
                        key={index}
                        index={index+1}
                        id={item}
                        groupName={clean[item]}
                    />))}
                </div>
            )
        }
    }


    return (
       <div>
           <h2>Todo groups</h2>
            <CheckAcc/>

           {/*<Form  />*/}
           {/*<TodoList/>*/}

       </div>
    );
};

export default connect(mapStateToProps, { GetGroups, Get_Me })(Home);
