import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputText10 extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id10" data-testid="image-input-label">
        Imagem
        <input
          id="id10"
          name="imagePath"
          type="text"
          value={ srtTxt }
          onChange={ srcOnCh }
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default InputText10;

InputText10.propTypes = {
  srtTxt: PropTypes.string.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
