import Pokemon from './Pokemon.js';
import React from 'react';

const PokemonList = (props) => {
    return (
        <div className="pokemon-list">
            { props.data.map((poke, i) => (
                <Pokemon key={i} poke={poke} name={poke.name} img={poke.img}/>
            ))}
        </div>
    )
};

export default PokemonList;
