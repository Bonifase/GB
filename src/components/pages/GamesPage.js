import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const GamesPage = () => (
  <div>
    
      <div className="text-center">
        <div className="alert alert-info">
          You have no games yet. How about creating one?
          <Link to="/dashboard" className="btn btn-primary btn-sm">
          Back to dashboard
        </Link>
        </div>
      </div>
  
  </div>
);

GamesPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default connect(null)(GamesPage);