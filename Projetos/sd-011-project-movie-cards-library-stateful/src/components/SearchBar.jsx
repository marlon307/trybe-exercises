import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckBox from './InputCheckBox';
import SelectList from './SelectList';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText searchText={ searchText } srcOnCh={ onSearchTextChange } />
        <InputCheckBox bkOnly={ bookmarkedOnly } srcbkOch={ onBookmarkedChange } />
        <SelectList slVl={ selectedGenre } evSl={ onSelectedGenreChange } />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
