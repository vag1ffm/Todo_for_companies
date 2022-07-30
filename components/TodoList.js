import React, {useEffect} from 'react'
import TodoItem from './TodoItem'
import { connect } from "react-redux";
import {PropTypes} from "prop-types";
import {deleteTodo, Get_Me, getTodos, toggleTodo} from "../actions/todos";
import {useParams} from "react-router-dom";
import Form from "./Form";
// import {Component, Fragment} from "@types/react";
//

const mapStateToProps = (props) => ({
    todos: props.todos.todos,
});



function TodoList(props) {
    const {id,title} = useParams()

   let propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired,
   };
    let me
    me = props.Get_Me()
    useEffect(()=>{
        props.getTodos(id)


    }, [])
    // console.log(props.todos)

    let does = []
    let done = []

    return (
        <>
            <h2>Todo List</h2>
            <Form mainId={id} me={me}/>
            <div>
                {props.todos.map((item, index) => {
                    if (item.completed === false) {
                        does.push(item)
                    } else {
                        done.push(item)
                    }
                })}
                <ul className={'do'}>
                    <h3>Do</h3>
                    {does.map((item, index) => <TodoItem
                        key={index}
                        id={item.id}
                        person={item['person_name']}
                        mainId={id}
                        item={item}
                        index={index}
                        delTodo={props.delTodo}
                        doneHandler={props.toggleTodo}
                        delete={props.deleteTodo}
                    />)}
                </ul>
                <ul className={'done'}>
                    <h3>Done</h3>
                    {done.map((item, index) => <TodoItem
                        key={index}
                        id={item.id}
                        mainId={id}
                        person={item['person_name']}
                        item={item}
                        index={index}
                        delTodo={props.delTodo}
                        doneHandler={props.toggleTodo}
                        delete={props.deleteTodo}
                    />)}
                </ul>
            </div>
        </>

    )
}

export default connect(mapStateToProps, { Get_Me, getTodos, deleteTodo, toggleTodo })(TodoList);
