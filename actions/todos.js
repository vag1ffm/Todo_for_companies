import axios from 'axios';
import {GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO, REGISTRATION, LogIn, GetMe, Get_Groups} from './types';
import {func} from "prop-types";
import UsingLoader from "../components/Loader/UsingLoader";

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// let url = 'https://todoreactdjango.pythonanywhere.com/'
let url = 'http://127.0.0.1:8000/'

function header() {
    return {
        Authorization : `Token ${localStorage.getItem('token')}`
    }
}

let headers = {
    Authorization : `Token ${localStorage.getItem('token')}`
}
// Get todo list
export const getTodos = (id) => dispatch => {
    axios.get(`${url}api/todo/${id}`, {
         headers: {
             Authorization : `Token ${localStorage.getItem('token')}`
         }
    })
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data.todos
            });
        }).catch(error => console.log(error));
};

//Delete todo
export const deleteTodo = (id, mainid) => dispatch => {
    axios.delete(`${url}api/todo/${id}/`, {
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`
        }
    } )
        .then(result => {
            console.log(result.data)
            if(result.data['error']) {

            } else {
                dispatch({
                    type: DELETE_TODO,
                    payload: id
                });
            }

        }).catch(error => console.log(error));
};

//Toggle todo
export const toggleTodo = (todo, mainid) => dispatch => {

    axios.put(`${url}api/todo/${todo.id}/`, todo,{
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`
        }
    })
        .then(result => {
            console.log(result.data.post)
            if(result.data['error']) {

            } else {
                todo.completed = !todo.completed;
                dispatch({
                    type: TOGGLE_TODO,
                    payload: result.data
                });
            }

        }).catch(error => console.log(error));
};

//Add todo
export const addTodo = (todo, mainid) => dispatch => {
    axios.post(`${url}api/todo/${mainid}/`, todo, {
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`
        }
    })
        .then(result => {
            dispatch({
                type: ADD_TODO,
                payload: result.data.todo
            });
        }).catch(error => console.log(error));
};

export const RegistrationOn = (a, func, func2) => dispatch => {
    let datas = {
        "username" : a[0],
        "email" : a[1],
        "password" : a[2]
    }
    axios.post(`${url}api/auth/users/`, datas)
        .then(result => {
            func()
            func2()
            dispatch({
                type: REGISTRATION,
                payload: dispatch
            });
        }).catch(error => alert(error.response.data['username']||error.response.data['password'] || 'Registration failed'));
};

export const Log_In = (a, func, func2, hide, show, redirect) => dispatch => {
    let datas = {
        "username" : a[0],
        "password" : a[1]
    }
    show()
    axios.post(`${url}auth/token/login/`, datas)
        .then(result => {
            localStorage.setItem('token', result.data.auth_token)
            hide()
            func('Log Out')
            redirect('/')
            func2

            dispatch({
                type: LogIn,
                payload: datas
            });
        }).catch(error => {
            hide()
            console.log(error)
    });
};

let person
export const Get_Me = () => dispatch => {
    axios.get(`${url}api/auth/users/me/`, {
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`
        }
    })
        .then(result => {
            dispatch({
                type: GetMe,
                payload: result.data
            });
            person = result.data
        }).catch(error => console.log(error));

    return person
};


export const CreateTodo = (data) => dispatch => {
    data = {
        "group_title": data[0],
        "group_password" : data[1]
    }
    axios.post(`${url}api/group/`, data, {
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`
        }
    })
        .then(result => {
            console.log(result)
        }).catch(error => console.log(error));
};

let todolist
export const GetGroups = () => dispatch => {
    if (localStorage.getItem('token') === null) {

    } else {
        axios.get(`${url}api/group/`,
            {
                headers: {
                    Authorization : `Token ${localStorage.getItem('token')}`
                }
            })
            .then(result => {
                todolist = result
                dispatch({
                    type: Get_Groups,
                    payload: result.data
                });
            }).catch(error => console.log(error));
    }


};

export const Log_Out = () => dispatch => {
    axios.post(`${url}auth/token/logout/`,
        {
            headers: {
                Authorization : `Token ${localStorage.getItem('token')}`
            }
        })
        .then(result => {
        }).catch(error => console.log(error));

};

export const Join_Todo = (data) => dispatch => {
    axios.post(`${url}api/group_member/`, data,
        {
            headers: {
                Authorization : `Token ${localStorage.getItem('token')}`
            }
        })
        .then(result => {
            console.log(result)
        }).catch(error => console.log(error));

};