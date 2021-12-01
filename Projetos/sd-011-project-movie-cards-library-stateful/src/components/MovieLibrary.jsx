import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.evSearch = this.evSearch.bind(this);
    this.resulSearch = this.resulSearch.bind(this);
    this.AddMoiveList = this.AddMoiveList.bind(this);
  }

  get initialState() {
    const { movies } = this.props;
    return {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  evSearch({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  // Ajuda de Rodrigo Ruan na sala (A)
  resulSearch() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let resultSch = movies;
    if (bookmarkedOnly) resultSch = movies.filter(({ bookmarked }) => bookmarked);
    if (selectedGenre) resultSch = movies.filter(({ genre }) => genre === selectedGenre);
    if (searchText) {
      resultSch = movies.filter(({
        title, subtitle, storyline,
      }) => title.includes(searchText)
      || subtitle.includes(searchText)
        || storyline.includes(searchText));
    }
    return resultSch;
  }

  // Ajuda de Julio Fillizola
  AddMoiveList(moviAdd) {
    const { movies } = this.state;
    // Reatribuindo ao meu objeto movies um novo card
    this.setState({ movies: [...movies, moviAdd] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.evSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.evSearch }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.evSearch }
        />
        <MovieList movies={ this.resulSearch() } />
        <AddMovie onClick={ this.AddMoiveList } />
      </>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
