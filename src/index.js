import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import { composeWithDevTools } from 'remote-redux-devtools';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.JWT){
    const payload = decode(localStorage.JWT)
    const user = { token: localStorage.JWT,
    email: payload.email,
    username: payload.username,
    confirmed: payload.confirmed };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
