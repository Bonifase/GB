import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';

class DashboardPage extends React.Component {
    
    render(){
        return (
            <div>
              <h1>Dashboard page</h1>   
            </div>
        );
    }
} 

export default DashboardPage;