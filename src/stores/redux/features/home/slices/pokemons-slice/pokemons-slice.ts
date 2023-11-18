import { PokemonData } from "@/types/pokemon-data";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PokemonData[] = [];

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export default pokemonsSlice.reducer;
