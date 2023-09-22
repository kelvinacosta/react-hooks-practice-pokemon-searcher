import React,{useEffect,useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const [pokemonCards,setPokemonCards] = useState([]);
  const [originalPokemonCards,setOriginalPokemonCards] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(response=>response.json())
    .then(data=>{
      setPokemonCards(data)
      setOriginalPokemonCards(data)
    })
    .catch(error=> console.error("Error Getting Pokemon Cards",error))
  },[])

  const searchByName = (newSearch) => {
    // console.log("Typing from pokemon Page!!")
    if(newSearch === ""){
      setPokemonCards(originalPokemonCards)
    }else{
    const searchingPokemon = pokemonCards.filter(pokemon=>pokemon.name.toLowerCase().includes(newSearch.toLowerCase()))
    setPokemonCards(searchingPokemon)
    }
  }
  const addingPokemonCard =(newCard) =>{
    setPokemonCards([...pokemonCards,newCard])
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addingPokemonCard}/>
      <br />
      <Search onSearchPokemon={searchByName}/>
      <br />
      <PokemonCollection pokemonCards={pokemonCards} />
    </Container>
  );
}

export default PokemonPage;
