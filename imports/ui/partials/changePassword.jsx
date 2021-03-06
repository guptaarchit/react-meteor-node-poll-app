import React, { Component, PropTypes } from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default class ChangePassword extends Component {
  render() {
    return (
      <div className="signin">
        <h2>Change Password</h2>
        <Accounts.ui.LoginForm formState={ STATES.PASSWORD_CHANGE }/>
      </div>
    );
  }
}
