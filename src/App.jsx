/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Details from "./components/Pokemon/Details";
import { connect } from "react-redux";
import { showDetails, showMorePokemons, fetchPockemonsList } from "./components/pokemons.actions";

function App({ pokemonDetails, showDetails, showMorePokemons, fetchPockemonsList }) {
  const { wildPokemon, details, limit } = pokemonDetails;

  useEffect(() => {
    fetchPockemonsList(limit);
  }, [limit]);

  const showDetal = (data) => {
    showDetails(data);
  };

  let showMorePokemon = () => {
    const newLimit = limit + 20;
    showMorePokemons(newLimit);
  };
  const isEmpty = (obj) => {
    return JSON.stringify(obj) === "{}";
  };
  const isEmptyArr = (arr) => {
    return JSON.stringify(arr) === "[]";
  };

  return (
    <div className="container">
      <div className="title">Pokedex</div>
      <div className="goods">
        {!isEmptyArr(wildPokemon)
          ? wildPokemon.map((pokemon, i) => {
              return <Pokemon url={pokemon.url} name={pokemon.name} key={i} showDetal={showDetal} />;
            })
          : null}
        <button type="submit" className="load-more" onClick={showMorePokemon}>
          LOAD More
        </button>
      </div>
      <div className="details__block">{!isEmpty(details) ? <Details {...details} showDetal={showDetal} /> : null}</div>
    </div>
  );
}
const mapState = (state) => {
  return {
    pokemonDetails: state.pokemons.pokemonDetails,
    data: state.pokemons.pokemonCharacters.data,
  };
};
const mapDispatch = {
  showDetails,
  showMorePokemons,
  fetchPockemonsList,
};

export default connect(mapState, mapDispatch)(App);
