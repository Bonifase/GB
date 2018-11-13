import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ki from 'react-intl/locale-data/ki';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer'; 
import { userFetched, fetchCurrentUser } from './actions/users';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import { localeSet } from "./actions/locals";


addLocaleData(en);
addLocaleData(ki);
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk)));

if (localStorage.JWT){
    setAuthorizationHeader(localStorage.JWT)
    store.dispatch(fetchCurrentUser());
} else{
  store.dispatch(userFetched({}))
};

if (localStorage.gbLanguage) {
  store.dispatch(localeSet(localStorage.gbLanguage));
}

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
