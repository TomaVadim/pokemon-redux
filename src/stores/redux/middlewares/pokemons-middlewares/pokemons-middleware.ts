import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetcher } from "@/api/fetcher";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    const response = await fetcher.get("/pokemon");

    const pokemonNames = response.data.results.map(
      (pokemon: { name: string }) => pokemon.name
    );

    const detailsPromises = pokemonNames.map(async (name: string) => {
      const response = await fetcher.get(`/pokemon/${name}`);
      return response.data;
    });

    const details = await Promise.all(detailsPromises);

    const data = details.map((pokemon) => ({
      pokemonName: pokemon.name,
      pokemonImage: pokemon.sprites.front_default,
    }));

    return data;
  }
);
