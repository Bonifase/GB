<<<<<<< HEAD
import { USER_FETCHED } from '../types';
=======
import {USER_FETCHED} from '../types'
>>>>>>> fetch current user
import { userLoggedIn } from './auth';
import api from '../api';

export const userFetched = user => ({
    type: USER_FETCHED,
    user
<<<<<<< HEAD
    });
=======
})
>>>>>>> fetch current user

export const signup = (data) => dispatch => api.user.signup (data).then(user =>
    dispatch(userLoggedIn(user)));

<<<<<<< HEAD
export const fetchCurrentUser = () => (dispatch) => api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));
=======
export const fetchCurrentUser = () => (dispatch) => api.user.fetchCurrentUser().then(user => dispatch(userFetched(user )));
>>>>>>> fetch current user
