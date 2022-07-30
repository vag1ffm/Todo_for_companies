import React, {useState} from 'react';
import {findDOMNode} from "react-dom";
import {PropTypes} from "prop-types";
import {CreateTodo, Get_Me} from "./actions/todos";
import {connect} from "react-redux";


const mapStateToProps = (props) => ({

});

const Create = (props) => {
    let propTypes = {
        CreateTodo: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired,
    };

    let [todoName, SetTodoName] = useState('')
    let [todoPassword, SetTodoPassword] = useState('')

    function SendData() {
        let data = [todoName, todoPassword]
        props.CreateTodo(data)
        SetTodoName('')
        SetTodoPassword('')
    }

    return (
        <div>
            <h2>Create a Todo</h2>
            <form action="" className={'createfrom'}>
                <label htmlFor={'TodoName'}>
                    <h6>Todo name:</h6>
                    <input type="text" id={'tableName'} value={todoName} onChange={(e)=> SetTodoName(e.target.value)}/>
                </label>
                <label htmlFor={'TodoPassword'}>
                    <h6>Todo password:</h6>
                    <input type="password" id={'tablePassword'} value={todoPassword} onChange={(e)=> SetTodoPassword(e.target.value)}/>
                </label>
            </form>
            <button type={'submit'} onClick={SendData}>Create</button>
        </div>
    );
};


export default connect(mapStateToProps, { CreateTodo, Get_Me })(Create);
