import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputText8 extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id8" data-testid="title-input-label">
        Título
        <input
          id="id8"
          name="title"
          type="text"
          value={ srtTxt }
          onChange={ srcOnCh }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default InputText8;

InputText8.propTypes = {
  srtTxt: PropTypes.string.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
