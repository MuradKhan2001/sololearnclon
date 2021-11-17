
import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import {combineReducers, createStore} from "redux";
import UserReducer from "./reducer/userReducer";
import {Provider} from "react-redux";
import {SET_AUTH} from "./actions/action";


const store = createStore(combineReducers({
    userReduc: UserReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const userInfo = localStorage.getItem("user-info");

if(userInfo != null){
    const userObj = JSON.parse(userInfo);
    store.dispatch({
        type: SET_AUTH,
        payload: userObj.username
    })
}


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

