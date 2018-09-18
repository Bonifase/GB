import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as actions from "../../actions/auth";


const HomePage = ({ isAuthenticated, logout }) => (
<div>
      <CssBaseline />
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Game Board
          </Typography>
        </Toolbar>
      </AppBar>
        
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Game Board
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Something short and easy to use.
            </Typography>
            <div>
              <Grid container spacing={16} justify="center">
                <Grid item>
                {isAuthenticated ?<button onClick={() => logout()}>Logout</button> : 
                ( <div>
                    <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
                  </div>)}
              </Grid>
              </Grid>
            </div>

    {/* <h1>Home page</h1>
    {isAuthenticated ?<button onClick={() => logout()}>Logout</button> : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
    )} */}
</div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.bool.isRequired 
};

function mapStateToProps(state) {
    return {
         isAuthenticated: !!state.user.token
    }
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);