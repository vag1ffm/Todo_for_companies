import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { Provider} from "react-redux";
import store from './store'
import Navigate from "./components/nav.js";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate as Navi, useHistory, useLocation,
} from "react-router-dom";
import Home from "./Home";
import * as PropTypes from "prop-types";
import Create from "./Create";
import Join from "./Join";
import Register from "./components/Registrate/Register";
import TodoList from "./components/TodoList";
import LogInPage from "./components/Registrate/LogInPage";
import Loader from "./components/Loader/loader";
import UsingLoader from "./components/Loader/UsingLoader";
import { useTransition, animated } from 'react-spring'

Routes.propTypes = {children: PropTypes.node};



export default function App() {
    let [todos, setTodos] = useState([])
    let [chosengroup, setChosenGroup] = useState()

    let [tokenhas, setTokenhas] = useState('')
    const [loader, showLoader, HideLoader] = UsingLoader()



    let location = useLocation()
    let transition = useTransition(location,  {
        from: {
            opacity: 0,
            transform: 'translateX(100%)'
        },
        enter: {
            opacity: 1,
            transform: 'translateX(0%)'

        },
        leave: {
            opacity: 0,
            transform: 'translateX(-100%)'

        }
    })

    return (
        <>
            <Navigate  tokenhas={tokenhas} setTokenhas={setTokenhas}/>

            <div className="container scroll" style={{position:'relative'}}>
                {transition((styles, item, key) => (
                    <animated.div key={key} style={styles}>
                        <div style={{position: 'absolute', width:'100%'}}>
                            <Routes location={item}>
                                <Route path='/' element={<Home chosengroup={chosengroup} setChosenGroup={setChosenGroup}/>}/>
                                <Route path='/create' element={<Create/> }/>
                                <Route path='/join' element={<Join/> }/>
                                <Route path='/register' element={<Register  tokenhas={tokenhas} setTokenhas={setTokenhas}/> }/>
                                <Route path='/login' element={<LogInPage lShow={showLoader} lhide={HideLoader}  tokenhas={tokenhas} setTokenhas={setTokenhas}/>}/>
                                <Route path='/:id-:title' element={<TodoList chosengroup={chosengroup}/> }/>
                            </Routes>
                        </div>

                    </animated.div>
                ))}


            </div>
            {loader}
        </>
    );

}
