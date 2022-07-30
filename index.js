import App from './App.js';
import ReactDOM from "react-dom";
import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate as Navi, useHistory, useLocation,
} from "react-router-dom";
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'))
