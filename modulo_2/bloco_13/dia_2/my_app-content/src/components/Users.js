// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { id } = this.props.match.params;
    console.log(greetingsMessage);
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component { id }</p>
      </div>
    );
  }
};

export default Users;

