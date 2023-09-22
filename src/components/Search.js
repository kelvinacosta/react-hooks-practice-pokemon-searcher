import React,{useState} from "react";

function Search({onSearchPokemon}) {
  
  const [search,setSearch] = useState("")

  const handleChange = (e) => {
    const textSearch = e.target.value
    setSearch(textSearch)
    onSearchPokemon(textSearch)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
