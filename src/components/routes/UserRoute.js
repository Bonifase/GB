import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const UserRoute = ({ component: component, ...rest}) => (
    <Route {...rest} render={props => <component {...props} />} />
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default UserRoute;