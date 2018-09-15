import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';


const ConfirmEmailMessage = () => (
    <Message info>
        <Message.Header>Please verify your email to unlock awesomeness</Message.Header>
    </Message>
);
// DashboardPage.propTypes = {
//     isConfirmed: PropTypes.bool.isRequired
// };

// function mapStateToProps(state) {
//     return {
//         isConfirmed: !!state.user.confirmed 
//     }
// }

export default ConfirmEmailMessage;