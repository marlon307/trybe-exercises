import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputCheckBox extends Component {
  render() {
    const { bkOnly, srcbkOch } = this.props;
    return (
      <label htmlFor="idckb" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="idckb"
          type="checkbox"
          name="bookmarkedOnly"
          value={ bkOnly }
          onChange={ srcbkOch }
          data-testid="checkbox-input"
          checked={ bkOnly }
        />
      </label>
    );
  }
}

export default InputCheckBox;

InputCheckBox.propTypes = {
  bkOnly: PropTypes.bool.isRequired,
  srcbkOch: PropTypes.func.isRequired,
};
