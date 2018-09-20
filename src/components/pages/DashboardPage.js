
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import TopNavigation from "../navigation/TopNavigation";

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed } = this.props;
    return (
        <div>
      <TopNavigation />
      <div className="container-fluid">
        {!isConfirmed && <ConfirmEmailMessage />}
      </div></div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);