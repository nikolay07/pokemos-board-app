import { fetchPockemonData, fetchEncounterPokemon } from "./pokemons.gateway";
export const POCKEMON_DATA = "POCKEMON_DATA/POCKEMONS";
export const SHOW_DETAILS = "SHOW_DETAILS/POCKEMONS";
export const SHOW_MORE = "SHOW_MORE/POCKEMONS";
export const SHOW_CHARACTERS = "SHOW_CHARACTERS/POCKEMONS";

export const recivedDataPockemons = (pockemonsList) => {
  return {
    type: POCKEMON_DATA,
    payload: {
      pockemonsList,
    },
  };
};
export const showDetails = (details) => {
  return {
    type: SHOW_DETAILS,
    payload: {
      details,
    },
  };
};

export const showMorePokemons = (limit) => {
  return {
    type: SHOW_MORE,
    payload: {
      limit,
    },
  };
};

export const recivedPokemonCharacters = (characters) => {
  return {
    type: SHOW_CHARACTERS,
    payload: {
      characters,
    },
  };
};

export const fetchEncounter = (url) => {
  let thunk = (dispatch) => {
    fetchEncounterPokemon(url).then((response) => {
      dispatch(recivedPokemonCharacters(response.data));
    });
  };

  return thunk;
};

export const fetchPockemonsList = (limits) => {
  let thunk = (dispatch) => {
    fetchPockemonData(limits).then((response) => {
      dispatch(recivedDataPockemons(response.data.results));
    });
  };
  return thunk;
};
