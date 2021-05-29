import React, { Component } from 'react'
import Imput from './Imput';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      uf: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          {/* <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={ this.state.estadoFavorito } onChange={ this.handleChange } />
          </label>
          <input type="number" name="idade" />
          <input type="checkbox" name="vaiComparecer" />
          <select name="uf" onChange={ this.handleChange }>
            <option value="Espirito Santo">Espirito Santo</option>
            <option value="Minas Gerais">Minas Gerais</option>
          </select>
          <p>{ this.state.uf }</p> */}
          <Imput name="uf" type="text" value={ this.state.uf } eventChange={ this.handleChange } />
          <Imput name="estadoFavorito" type="password" value={ this.state.estadoFavorito } eventChange={ this.handleChange } />
          <p>{ this.state.estadoFavorito }</p>
        </form>
      </div>
    );
  }
}

export default Form;
