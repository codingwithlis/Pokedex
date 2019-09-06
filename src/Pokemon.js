import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            <div>{props.name}</div>
            <img src={props.img}></img>
        </div>
    )
};


export default Pokemon;
