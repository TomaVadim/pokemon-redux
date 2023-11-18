import { combineReducers } from "@reduxjs/toolkit";

import pokemonsSlice from "@/stores/redux/features/home/slices/pokemons-slice/pokemons-slice";

export const rootReducer = combineReducers({
  pokemons: pokemonsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
