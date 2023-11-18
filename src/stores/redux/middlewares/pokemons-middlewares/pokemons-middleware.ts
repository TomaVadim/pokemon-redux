import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetcher } from "@/api/fetcher";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPocemons",
  async () => {
    try {
      const response = await fetcher.get("/pokemon", {
        headers: {
          limit: 10,
        },
      });

      return response.data;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
);
