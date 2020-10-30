/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon2";
import Details from "./components/Pokemon/Details";
import { fetchPockemonData } from "./components/pokemons.gateway";

function App() {
  const pokemonDetails = { wildPokemon: [], details: {}, limit: 20 };
  const [state, setState] = useState(pokemonDetails);
  const { wildPokemon, details, limit } = state;

  useEffect(() => {
    fetchPockemonData(limit).then((response) => {
      setState({ ...state, wildPokemon: state.wildPokemon.concat(response.data.results) });
    });
  }, [limit]);

  const showDetal = (data) => {
    setState({ ...state, details: data });
  };
  const closeDetal = (e) => {
    if (e.currentTarget === e.target) {
      setState({ ...state, details: {} });
    }
  };

  let showMorePokemon = () => {
    setState({ ...state, limit: limit + 20 });
  };

  return (
    <div className="container" onClick={closeDetal}>
      <div className="title">Pokedex</div>
      <div className="goods">
        {wildPokemon.map((pokemon, i) => {
          return <Pokemon url={pokemon.url} name={pokemon.name} key={i} showDetal={showDetal} />;
        })}
        <button type="submit" className="load-more" onClick={showMorePokemon}>
          LOAD More
        </button>
      </div>
      <div className="details__block">{Object.keys(details).length ? <Details {...details} /> : null}</div>
    </div>
  );
}

export default App;
