<<<<<<< HEAD
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED  } from "../types";
=======
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED } from "../types";
>>>>>>> fetch current user

export default function user(state = { loaded: false }, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_FETCHED:
<<<<<<< HEAD
            return { ...state, ...action.user, loaded: true}
        case USER_LOGGED_OUT:
            return {loaded: true};
=======
            return {...state, ...action.user, loaded: true};
        case USER_LOGGED_OUT:
            return {loaded: true };
>>>>>>> fetch current user
        default: return state;
    };
}