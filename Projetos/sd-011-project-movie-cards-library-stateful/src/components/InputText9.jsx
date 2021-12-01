import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputText9 extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id9" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="id9"
          name="subtitle"
          type="text"
          value={ srtTxt }
          onChange={ srcOnCh }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default InputText9;

InputText9.propTypes = {
  srtTxt: PropTypes.string.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
