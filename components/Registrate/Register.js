import React, {useState} from 'react';
import {connect} from "react-redux";
import {Log_In, RegistrationOn} from "../../actions/todos";
import {PropTypes} from "prop-types";

const Register = (props) => {
    let propTypes = {
        RegistrationOn: PropTypes.func.isRequired,
        Log_In: PropTypes.func.isRequired,
    };

    let [Run, SetRun] = useState(''),
        [Rem, SetRem] = useState(''),
        [Rpw, SetRpw] = useState('')

    console.log(props)
    function Clear() {
        SetRun('')
        SetRem('')
        SetRpw('')
    }


    function SendDatas() {
        let Rdatas = [Run, Rem, Rpw]
        console.log(Rdatas)
        props.RegistrationOn(Rdatas, () => props.Log_In( [Run, Rpw], props.setTokenhas), Clear)
        // props.Log_In( [Run, Rpw], props.setTokenhas)

    }

    return (
        <div>
            <h2>Register to Todo</h2>

            <form className={'createfrom'}>
                <label htmlFor={'Name'}>
                    <h6>User name:</h6>
                    <input type="text" value={Run} id={'Name'} onChange={(e) => {SetRun(e.target.value)}}/>
                </label>
                <label htmlFor={'email'}>
                    <h6>Email:</h6>
                    <input type="email" value={Rem} id={'email'} onChange={(e) => {SetRem(e.target.value)}}/>
                </label>
                <label htmlFor={'Password'}>
                    <h6>Password:</h6>
                    <input type="password" value={Rpw} id={'Password'} onChange={(e) => {SetRpw(e.target.value)}}/>
                </label>
            </form>
            <button onClick={SendDatas}>Register</button>


        </div>


    );
};


const mapStateToProps = (props) => ({
    // todos: props.todos.todos
});

export default connect(mapStateToProps, { RegistrationOn, Log_In })(Register);
