import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputText12 extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id12" data-testid="rating-input-label">
        Avaliação
        <input
          id="id12"
          name="rating"
          type="number"
          value={ srtTxt }
          onChange={ srcOnCh }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default InputText12;

InputText12.propTypes = {
  srtTxt: PropTypes.number.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
