import React, {Component} from 'react';
import {Pokemon} from './pokemon';

class PokemonList extends Component {  
  render() {
    let pokemon = [...Array(this.props.numberOfPokemon).keys()].map( i => i+1);
    return (
      <div className='container'>
        <div className='row'>
          {
            pokemon.map(pk => (
              <Pokemon  filter={this.props.filter} filterMap={this.props.filterMap} key={pk} id={pk} />
            ))
          }
        </div>
      </div>
    );
  }
}

const PokemonListContainer = ({numberOfPokemon, filterMap, filter}) => {


  return (
    <div className='album py-5 bg-light'>
      <PokemonList filter={filter}  filterMap={filterMap} numberOfPokemon={numberOfPokemon} />
    </div>
  )
}





export default PokemonListContainer;