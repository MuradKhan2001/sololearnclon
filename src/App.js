import React, {useState} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Main from "./admin/components/layout/main";
import Authentication from "./admin/components/authentification/authentification";
import UserAdd from "./admin/components/authentification/user-add";
import "./global.css";
import Home from "./home";
import AddCourse from "./admin/components/course/add-course";
import Course from "./course";
import Chapters from "./chapters";
import {connect} from "react-redux";
import Lessons from "./lessons";

function App(props) {

    const [logout,setLogout]=useState(false);

    function signOut() {
        localStorage.removeItem("user-info");
        window.location.reload();
    }

    function logOut() {
        setLogout(!logout)
        localStorage.removeItem("token");
    }



    return (
        <>
            <nav className='navbar'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link to="/"> <img src="./logo1.png" alt=""/> </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/course/">
                                Courses
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#">
                                 Code Playground
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#">
                                Discuss
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#">
                                Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#">
                                Get Pro
                        </Link>
                    </li>
                    {
                        props.isAuth ? <li className='nav-item' >
                                <div>
                                    <div className="UserName d-flex">

                                            <div onClick={logOut} className="circleProfile">
                                                {props.username.slice(0,1)}
                                            </div>

                                        { logout ? <div className="profile">
                                           <div className="NameUser"> {props.username}</div>
                                            <div className="line"></div>
                                            <div className="SignOut">
                                                <div className="logOutMain">
                                                    <div>
                                                        <img className="signImg" src="/settings.png" alt=""/>
                                                    </div>

                                                    <div className='settings'>
                                                        Settings
                                                    </div>
                                                </div>
                                                <div className="logOutMain">
                                                    <img className="signImg" src="/help.png" alt=""/>
                                                    <div className='help'>
                                                        Help
                                                    </div>
                                                </div>
                                                <div onClick={signOut} className="logOutMain">
                                                    <div  className="d-flex">
                                                        <img className="signImg" src="/logout.png" alt=""/>
                                                        <div className="logOut">Log Out</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>:   ""}

                                    </div>
                                </div>
                        </li>: <>
                            <li className='nav-item'>
                                <button className='button1' > <Link to="/admin">Log in</Link>  </button>
                            </li>
                            <li className='nav-item'>
                                <button className='button2' > <Link to="/admin/register">Register</Link> </button>
                            </li>
                        </>
                    }
                </ul>
            </nav>
            <Switch>
                <Route path={"/admin/main"} component={Main}/>
                <Route path={"/lessons/:id"} component={Lessons}/>
                <Route path={"/chapters/:id"} component={Chapters}/>
                <Route path={"/admin/register"} component={UserAdd}/>
                <Route path={"/admin/"} component={Authentication}/>
                <Route path={"/course/"} component={Course}/>
                <Route path={"/"} component={Home}/>
            </Switch>
        </>

    );

}

function mapStateToProps(state) {
    return {
        isAuth: state.userReduc.isAuth,
        username: state.userReduc.username
    }
}

export default connect(mapStateToProps) (App);