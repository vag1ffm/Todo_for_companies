import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Get_Me, GetGroups, Join_Todo} from "./actions/todos";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const mapStateToProps = (props) => ({
    listgroup: props.todos.list
});

const Join = (props) => {
    let propTypes = {
        Join_Todo: PropTypes.func.isRequired,
    };

    let [tableName, setTableName] = useState('')
    let [password, setPassword] = useState('')

    function JoinClick() {
        let dic = {
           'group_title' :  tableName,
            'group_password' :  password
        }
        props.Join_Todo(dic)
        setTableName('')
        setPassword('')
    }

    return (
        <div>
            <h2>Join to Todo</h2>
            <form action="" className={'createfrom'}>
                <label htmlFor={'TodoName'}>
                    <h6>Todo name:</h6>
                    <input type="text" id={'tableName'} value={tableName} onChange={(e)=> setTableName(e.target.value)}/>
                </label>
                <label htmlFor={'TodoPassword'}>
                    <h6>Todo password:</h6>
                    <input type="password" id={'tablePassword'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label>
            </form>
            <Link to={'/'}>
                <button type={'submit'} onClick={JoinClick}>Join</button>
            </Link>
        </div>
    );
};


export default connect(mapStateToProps, { Join_Todo })(Join);
