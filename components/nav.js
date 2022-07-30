import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Home from "../Home";
import Groups from "./Groups";
import {Get_Me, Log_Out} from "../actions/todos";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const mapStateToProps = (props) => ({
    myName: props
});


const Navigate = (props) => {
    let propTypes = {
        Log_Out: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired
    };

    function LogOut() {
        props.Log_Out()
        props.setTokenhas('Account')
        localStorage.removeItem('token')
    }

    let myName = props.myName.todos.myName
    myName = (myName !== undefined)? myName[0].username : 'Account'
    useEffect(()=> {
        props.Get_Me()
    }, [])

    function InOrOut() {
        if (localStorage.getItem('token') === null) {
            return (
                <li>
                    <Link to={'/register/'}>
                        Account
                    </Link>
                    <ul className={'header-sub-ul'}>
                        <li>
                            <Link to={'/login/'}>
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link  to={'/register/'}>
                            Register
                            </Link>
                        </li>
                    </ul>
                </li>
            )
        } else {
            return (
                <li>
                        {myName}

                    <ul className={'header-sub-ul'}>
                        <li>
                            <Link to={'/login/'} onClick={LogOut}>
                            Log Out
                            </Link>
                        </li>
                        <Link  to={'/register/'}>
                            <li>Settings</li>
                        </Link>
                    </ul>

                </li>
            )
        }
    }




    return (
        <nav>
            <ul className={'header-ul'}>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/create/'}>
                        Create
                    </Link>
                </li>
                <li>
                    <Link to={'/join/'}>
                        Join
                    </Link>
                </li>
                <InOrOut/>
            </ul>
        </nav>
    );
};


export default connect(mapStateToProps, { Log_Out, Get_Me })(Navigate);
