import axios from "axios";

const baseUrl = `https://pokeapi.co/api/v2/pokemon/?`;

export const fetchPockemonData = (limit) => axios.get(`${baseUrl}offset=${limit - 20}&limit=${limit}`);

export const fetchEncounterPokemon = (url) => axios.get(url);
