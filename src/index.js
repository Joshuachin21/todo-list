import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from 'react-router-redux';
import {Provider} from 'react-redux'
import PageRouter from "./app";
import store from './store';
import "./index.css";
ReactDOM.render(
    <Provider store={store}>
                <PageRouter/>
    </Provider>

    , document.getElementById("root"));

