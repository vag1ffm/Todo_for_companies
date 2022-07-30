import {
    GET_TODO_LIST,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    REGISTRATION,
    LogIn,
    GetMe,
    Creat_a_todo,
    Get_Groups
} from '../actions/types';

const initialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                todos: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: [...state.todos]
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REGISTRATION:
            return {
                ...state,
                MyData: [action.payload]

            };
        case LogIn:
            return {
                ...state,

            };
        case GetMe:
            return {
                ...state,
                myName: [action.payload]
            };
        case Creat_a_todo:
            return {
                ...state,

            };
        case Get_Groups:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};