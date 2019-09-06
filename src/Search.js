import React, { Component } from 'react';
import App from './App.js';
import $ from 'jquery';
import Pokemon from './Pokemon.js';

class Search extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          search: "",
          currPoke: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClickSearch = this.handleClickSearch.bind(this);
      this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    
    handleChange(event){
        this.setState({
          search: event.target.value
        })
    };
    
    handleClickSearch(event){
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${this.state.search}`,
            method:'GET',
            success: (response) => {
                this.setState({
                  currPoke: {name: response.name, img: response.sprites.front_default}
                })
            },
            error: function(error){
                console.error(error)
              }
        })
    };

    handleClickAdd(event){
      this.props.addPokemon(this.state.currPoke)
    };

    render(){
      return (
          <div className="search">
            <div className="screen">
              <Pokemon name={this.state.currPoke.name} img={this.state.currPoke.img}/>
            </div>
              <form>
                  <input value={this.state.search} onChange={this.handleChange} type="text" />
                  <button onClick={this.handleClickSearch} type="button"> Search</button>
                  <button onClick={this.handleClickAdd} type="button"> Add</button>
            </form>
          </div>
      )
    }
  };

  export default Search;