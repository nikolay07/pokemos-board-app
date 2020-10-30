import { POCKEMON_DATA, SHOW_DETAILS, SHOW_MORE, SHOW_CHARACTERS } from "./pokemons.actions";

const initialState = {
  pokemonDetails: { wildPokemon: [], details: {}, limit: 20 },
  pokemonCharacters: {
    data: {},
  },
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POCKEMON_DATA:
      return {
        ...state,
        pokemonDetails: {
          ...state.pokemonDetails,
          wildPokemon: state.pokemonDetails.wildPokemon.concat(action.payload.pockemonsList),
        },
      };

    case SHOW_DETAILS:
      return {
        ...state,
        pokemonDetails: { ...state.pokemonDetails, details: action.payload.details },
      };
    case SHOW_MORE:
      return {
        ...state,
        pokemonDetails: { ...state.pokemonDetails, limit: action.payload.limit },
      };

    case SHOW_CHARACTERS:
      return {
        ...state,
        pokemonCharacters: { ...state.pokemonCharacters, data: action.payload.characters },
      };

    default:
      return state;
  }
};
