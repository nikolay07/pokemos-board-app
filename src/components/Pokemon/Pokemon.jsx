import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchEncounterPokemon } from "../pokemons.gateway";
import { fetchEncounter } from "../pokemons.actions";
import { colors } from "../../colors";

const Pokemon = ({ url, name, showDetal }) => {
  const isEmpty = (obj) => {
    return JSON.stringify(obj) === "{}";
  };
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const [data, setData] = useState({});

  useEffect(() => {
    fetchEncounterPokemon(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  let pokemonCharecters = {};

  if (!isEmpty(data)) {
    pokemonCharecters = {
      id: data.id,
      name: data.name,
      types: data.types.map((el) => el.type.name),
      characters: data.stats.map((el) => el.base_stat),
      weight: data.weightweight,
    };
  }

  const { id, types } = pokemonCharecters;
  return (
    <div className="goods__items">
      <div className="goods__items-logo" onClick={() => showDetal(pokemonCharecters)}>
        {!isEmpty(data) ? <img src={`${imgUrl}${id}.png`} alt="дракон" width="100%" /> : <div className="loader"></div>}
      </div>
      <span className="pokemon-name">{name}</span>
      <div className="pokemon-color">
        {!isEmpty(data)
          ? types.map((el, i) => {
              return (
                <span key={i} className="pokemon-color__item" style={{ background: `${colors[el]}` }}>
                  {el}
                </span>
              );
            })
          : null}
      </div>
    </div>
  );
};

const mapDispatch = {
  fetchEncounter,
};
const mapState = (state) => {
  return {
    characters: state.pokemons.pokemonCharacters.data,
    wild: state.pokemons.pokemonDetails.wildPokemon,
  };
};

export default connect(mapState, mapDispatch)(Pokemon);
