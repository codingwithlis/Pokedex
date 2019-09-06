import React, { Component } from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js'

const data = [];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data
    };
   this.addPokemon = this.addPokemon.bind(this);
  }

  addPokemon(pokemon){
    let newPokemon = {name: pokemon.name, img: pokemon.img};
    this.setState({
      data: [...this.state.data, newPokemon]
    })
  }

  render(){
    return (
      <div className="pokedex">
        <div className="nav">
          <p>Pokédex</p>
        </div>
        <div className="nav2">
          <p2>Gotta catch 'em all!</p2>
        </div>
        <Search addPokemon={this.addPokemon}/>
        <PokemonList data={this.state.data}/>
      </div>
    )
  }
}
export default App;
