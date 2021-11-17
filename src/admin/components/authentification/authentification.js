import React, {useState} from 'react';
import "./authentication.css";
import {Link, useHistory} from  "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {SET_AUTH} from "../../../actions/action";


function Authentication(props) {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [text,setText]=useState('');

    const history =useHistory();

    function login() {
        axios.post("/api/sololearn/user/login",{username:username,password:password}).then((response)=>{
            setText(response.data.message);
            if (response.data.status_code === 0){
                console.log(response.data.data);
                localStorage.setItem("token", response.data.data.token);
                props.setAuth(username);
                if (response.data.data.is_user)
                    history.push("/");
                else  history.push("/admin/main");
            }

        }).catch((error)=>{
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }


    return (
        <>
            <div className="ForBg">
                <img src="background5.jpg" alt=""/>
                <div className="container BgFon">
                    <div className="row">
                        <h1 className={'text-center  mt-5 text-uppercase textOne'}>Sign in </h1>
                        <div className="col-md-4 offset-4">
                            <div className="form">
                                <div className="fon1">
                                    <div className="form-group  line1">
                                        <label className="name" htmlFor="username">User name</label>
                                        <input onChange={(e)=>setUsername(e.target.value)} type="text" id={'username'} className={'form-control'}/>
                                    </div>
                                    <div className="form-group line2">
                                        <label className="name" htmlFor="username">Password</label>
                                        <input onChange={(e)=>setPassword(e.target.value)} type="password" id={'password'} className={'form-control'}/>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center line3">
                                        <button onClick={ login } className={'btnOne'}>Login</button>
                                        <Link className='resgister'  to={'/admin/register'}>register ></Link>
                                    </div>
                                    <h5 className="text-danger text-center mt-3">{text}</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setAuth: (username)=>{
            return dispatch({
                type: SET_AUTH,
                payload: username
            })
        }
    }
}

export default connect(null,mapDispatchToProps) (Authentication);