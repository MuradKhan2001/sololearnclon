import {SET_AUTH} from "../actions/action";

function UserReducer(state = {isAuth: false, username: ""},action) {
    switch (action.type) {
        case SET_AUTH:
            state = {
                isAuth: true,
                username: action.payload
            };
            localStorage.setItem("user-info", JSON.stringify(state));
            break;
    }
    return state;
}

export default UserReducer;