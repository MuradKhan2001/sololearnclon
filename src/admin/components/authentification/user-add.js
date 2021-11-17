import React, {useReducer} from 'react';
import "./authentication.css";
import axios from "axios";
import { useHistory }  from "react-router-dom";

const ACTIONS ={
    USER_ADD: "user_add"
};

function reduser(state, action) {
    switch (action.type) {
        case ACTIONS.USER_ADD:
            state= {
                user:{
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            };
            break;
    }
    return state;
}


function UserAdd(props) {

    const history= useHistory();

    const initialUser={
        username:"",
        phone_number:"",
        password: "",
        full_name: "",
        user_role: ""
    };

    const [state, dispatch]= useReducer(reduser,{user: initialUser});

    function getInputValues(e) {
    dispatch({
        type: ACTIONS.USER_ADD,
        payload :{
            key: e.target.name,
            value: e.target.value
        }

    });

}
    function addUser() {
        axios.post("/api/sololearn/user/add",state.user).then((response)=>{
            if (response.data.status_code === 0)
            history.push("/admin")
        })
    }

    return (
        <div>
            <div className="ForBg">
                <img src="/background5.jpg" alt=""/>
                <div className="container BgFon">
                    <div className="row">
                        <h1 className={'text-center textOne mt-1 text-uppercase'}>Sign Up </h1>
                        <div className="col-md-4 offset-4">
                            <div className="form mt-1">
                                <div className="fon1 mt-1">
                                    <div className="form-group">
                                        <label className='name' htmlFor="full_name">Full Name</label>
                                        <input name={'full_name'} onChange={getInputValues} type="text"  className={'form-control'}/>
                                    </div>
                                    <div className="form-group ">
                                        <label className='name' htmlFor="username">User Name</label>
                                        <input name={'username'} onChange={getInputValues} type="text" className={'form-control'}/>
                                    </div>
                                    <div className="form-group mt-1">
                                        <label className='name' htmlFor="username">Password</label>
                                        <input name={'password'} onChange={getInputValues} type="password"  className={'form-control'}/>
                                    </div>
                                    <div className="form-group mt-1">
                                        <label className='name' htmlFor="username">Phone number</label>
                                        <input name={'phone_number'} onChange={getInputValues} type="password" className={'form-control'}/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label className='name' htmlFor="user_role">User Role</label>
                                        <select className="form-control" name='user_role' onClick={getInputValues}>
                                            <option value="Admin">Admin</option>
                                            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                                            <option value="USER">USER</option>
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className='btnOne' onClick={addUser} >Add User</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserAdd;