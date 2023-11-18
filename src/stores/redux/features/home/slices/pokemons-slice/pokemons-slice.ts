import { createSlice } from "@reduxjs/toolkit";

import { PokemonData } from "@/types/pokemon-data";

interface InitialState {
  data: PokemonData[];
  status: "loading" | "idle";
}

const initialState: InitialState = {
  data: [],
  status: "idle",
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export default pokemonsSlice.reducer;
