import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCards,addPokemon}) {

  const listOfPokemons = pokemonCards.map(pokemon=> <PokemonCard  key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {listOfPokemons}
      
    </Card.Group>
  );
}

export default PokemonCollection;
