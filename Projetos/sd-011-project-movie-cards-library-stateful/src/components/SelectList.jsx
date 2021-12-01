import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class SelectList extends Component {
  render() {
    const { slVl, evSl } = this.props;
    return (
      <label htmlFor="slId" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="slId"
          name="selectedGenre"
          value={ slVl }
          onChange={ evSl }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectList;

SelectList.propTypes = {
  slVl: PropTypes.string.isRequired,
  evSl: PropTypes.func.isRequired,
};
