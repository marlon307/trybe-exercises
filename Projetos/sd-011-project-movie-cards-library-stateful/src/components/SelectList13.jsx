import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class SelectList13 extends Component {
  render() {
    const { slVl, evSl } = this.props;
    return (
      <label htmlFor="slId" data-testid="genre-input-label">
        Gênero
        <select
          id="slId"
          name="genre"
          value={ slVl }
          onChange={ evSl }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectList13;

SelectList13.propTypes = {
  slVl: PropTypes.string.isRequired,
  evSl: PropTypes.func.isRequired,
};
