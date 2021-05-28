// arquivo UserProfile.js
import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserProfile;
