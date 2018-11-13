import { combineReducers } from 'redux';
import user from './reducers/user';
import locals from './reducers/locals';

export default combineReducers({
    user,
    locals
});