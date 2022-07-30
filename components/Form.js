import React from 'react';
import {addTodo, Get_Me, GetGroups} from "../actions/todos";
import PropTypes from "prop-types";
import {useState} from "react";
import {connect} from "react-redux";


const mapStateToProps = (props) => ({
    todos: props.todos.todos
});

const Form = (props) => {
    let [title, setTitle] = useState('')
    let person = props.me
    // let id = props.Get_Me()
    // let groups = props.GetGroups()



    function handlerEnter(e) {
        if (e.keyCode === 13) {
            if (title !== '') {
                // groups.data.forEach(group => {
                //     if (group.group_owner === id.data.id) {
                //         console.log('ura')
                //     }
                // })

                // console.log(groups.data)
                const todo = {
                    'title' : title
                };
                props.addTodo(todo, props.mainId);
                // console.log(todo)
                setTitle('')

            }
        }
    }


    let propTypes = {
        addTodo: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired,
        GetGroups: PropTypes.func.isRequired,
    };



    return (
        <div>
            <div className="input-field">
                <input id={'todos-label'} type="text" value={title} onChange={e=> setTitle(e.target.value)} onKeyDown={handlerEnter} />
                <label htmlFor={'todos-label'}>Todo name</label>
                {/*<select name='raiden' value={person} onChange={handlerPerson}>*/}
                {/*    <option value="Amir">Amir</option>*/}
                {/*    <option value="Vaga">Vaga</option>*/}
                {/*    <option value="Amir&Vaga">Amir&Vaga</option>*/}
                {/*</select>*/}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, { addTodo, Get_Me, GetGroups })(Form);
