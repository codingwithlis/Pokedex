# Pokédex

[Pokédex Demo](http://ec2-18-188-68-239.us-east-2.compute.amazonaws.com:3004/)

## What it is:
"Pokédex" is a single page web application built using ReactJS, that resembles the functinality of a pokédex device. A pokédex device is an electronic device designed to catalogue and provide information regarding the various species of pokémons. This Pokédex uses the [pokéAPI](https://pokeapi.co/docs/v2.html/) to help users search for their favorite pokémons and add them to their pokédex. 

## What it looks like:
![Image description](https://github.com/codingwithlis/Pokedex/blob/master/Pokedex.png)

## How it works:
- Users will be prompted to a main page that resembles what a physical Pokédex device looks like.
- Once they are on this page they have the option to search for any pokémons by typing their names on the search bar, and clicking the button `search`.
- If the pokémon name they typed is a valid pokémon, a picture of that pokémon will pop up on a black square that resembles the screen of a pokédex device.
- They have the option to add that pokémon to the pokédex by clicking the `add` button.

## How it was built:
- I started by building the components in the `src/` folder, and worked through the functionality in this order:
- The `App` component contains the data for the pokédex and methods to modify the pokémon in the pokédex.
  - a pokémon object looks like this: `{ name: 'Abra', img: 'http://...' }`
- The `Pokemon` component gets passed name and img props and renders the data to an img and p tag respectively. This component is reusable.
- The `PokemonList` component gets passed an array of pokémon objects in props and renders a `Pokemon` component for each object.
- The `Search` component renders an input and button allowing the user to search for pokémon by name and add them to the pokedex. A request was made to the PokeAPI when the input changes and capture/save the result when the user clicks the `Add` button.
  - This should cause the `PokemonList` componenet to re-render, showing the newly added pokémon.

## Future Plans:
- Add a remove button to each pokemon in the `PokemonList`.
- Add a custom name for each pokemon in the `Search` component and render the name in the `Pokemon` component.
- Add full-text search to the `Search` component input (search a pokemon by partial name match).

## Technologies used:
- Javascript
- Html
- Css
- React
- Node
- Express
- Docker
- AWS
- EC2