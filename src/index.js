import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer'; 
import { userFetched, fetchCurrentUser } from './actions/users';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.JWT){
    setAuthorizationHeader(localStorage.JWT)
    store.dispatch(fetchCurrentUser());
} else{
  store.dispatch(userFetched({}))
}

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
