import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class Button14 extends Component {
  render() {
    const { onClk } = this.props;
    return (
      <button type="button" data-testid="send-button" onClick={ onClk }>
        Adicionar filme
      </button>
    );
  }
}

export default Button14;

Button14.propTypes = {
  onClk: PropTypes.func.isRequired,
};
