import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText8 from './InputText8';
import InputText9 from './InputText9';
import InputText10 from './InputText10';
import TextArea from './InputText11';
import InputText12 from './InputText12';
import SelectList13 from './SelectList13';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = this.InitialState;
    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  get InitialState() {
    return {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  sendButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.InitialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText8 srtTxt={ title } srcOnCh={ this.handleChange } />
        <InputText9 srtTxt={ subtitle } srcOnCh={ this.handleChange } />
        <InputText10 srtTxt={ imagePath } srcOnCh={ this.handleChange } />
        <TextArea srtTxt={ storyline } srcOnCh={ this.handleChange } />
        <InputText12 srtTxt={ rating } srcOnCh={ this.handleChange } />
        <SelectList13 slVl={ genre } evSl={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.sendButton }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
