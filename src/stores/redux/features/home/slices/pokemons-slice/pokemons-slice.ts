import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PokemonData } from "@/types/pokemon-data";
import { fetchPokemons } from "@/stores/redux/middlewares/pokemons-middlewares/pokemons-middleware";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPokemons.fulfilled,
        (state, { payload }: PayloadAction<PokemonData[]>) => {
          state.data = payload;
          state.status = "idle";
        }
      );
  },
});

export default pokemonsSlice.reducer;
