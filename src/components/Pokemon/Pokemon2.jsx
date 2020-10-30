import React, { useState, useEffect } from "react";
import { fetchEncounterPokemon } from "../pokemons.gateway";
import { colors } from "../../colors";

let saveData = [];
const Pokemon = ({ showDetal, url, name }) => {
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  const [data, setData] = useState({});
  const isEmpty = (obj) => {
    return JSON.stringify(obj) === "{}";
  };
  // if (saveData.length > 0) {
  //   console.log(saveData);
  // }

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

  useEffect(() => {
    fetchEncounterPokemon(url).then((response) => {
      setData(response.data);
      saveData = [...saveData, response.data];
    });
  }, [url]);

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

export default Pokemon;
