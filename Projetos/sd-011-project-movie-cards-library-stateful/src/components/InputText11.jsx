import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id11" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ srtTxt }
          name="storyline"
          onChange={ srcOnCh }
          id="id11"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  srtTxt: PropTypes.string.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
