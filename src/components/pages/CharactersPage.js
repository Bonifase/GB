import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CharactersPage = ({ characters }) => (
  <div>
    { (
      <div className="text-center">
        <div className="alert alert-info">
          This part is still on production. Contact our developers at
        </div>
        <a href="https://twitter.com/BonifaseOrwa?lang=en" className="btn btn-primary btn-lg">
          Developer
        </a>
      </div>
    )}
  </div>
);

CharactersPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default connect()(CharactersPage);