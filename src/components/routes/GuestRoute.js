import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const GuestRoute = ({ isAuthenticated, component: component, ...rest}) => (
    <Route {...rest} render={props => isAuthenticated ? <Redirect to='/dashboard' /> : <component {...props} />} />
);

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps)(GuestRoute);