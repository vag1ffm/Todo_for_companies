import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Log_In, RegistrationOn} from "../../actions/todos";
import {PropTypes} from "prop-types";
import Navigate from "../nav";


const LogInPage = (props) => {
    let propTypes = {
        RegistrationOn: PropTypes.func.isRequired,
        Log_In: PropTypes.func.isRequired,
    };
    let history = useNavigate()
    console.log(props)


    function Clear() {
        Setun('')
        Setpw('')
    }
    let [un, Setun] = useState(''),
        [pw, Setpw] = useState('')

    function LogIn() {
        let datas = [un, pw]
        props.Log_In(
            datas,
            props.setTokenhas,
            Clear,
            props.lhide,
            props.lShow,
            history
        )



    }


    return (
        <div>
            <h2>Autorization to Todo</h2>

            <form className={'createfrom'}>
                <label htmlFor={'Name'}>
                    <h6>User name:</h6>
                    <input type="text" value={un} id={'Name'} onChange={(e) => {Setun(e.target.value)}}/>
                </label>
                <label htmlFor={'Password'}>
                    <h6>Password:</h6>
                    <input type="password" value={pw} id={'Password'} onChange={(e) => {Setpw(e.target.value)}}/>
                </label>
            </form>

            <button onClick={LogIn}>log in</button>
        </div>
    );
};

const mapStateToProps = (props) => ({
    // todos: props.todos.todos
});


export default connect(mapStateToProps, { RegistrationOn, Log_In })(LogInPage);
