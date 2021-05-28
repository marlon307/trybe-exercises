import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemonn: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon = () => {
    this.setState((anteriorState) => ({
      pokemonn: anteriorState.pokemonn + 1 === this.props.pokemons.length ? 0 : anteriorState.pokemonn + 1,
    }))
  }

  render() {
    return (
      <>
        <div className="pokedex">
          { <Pokemon pokemon={ this.props.pokemons[this.state.pokemonn] } /> }
        </div>
        <div className="panelBtn">
          <button className="btnPrev" onClick={ this.nextPokemon }>Next Pokemon</button>
        </div>
      </>
    );
  }
}

export default Pokedex;
