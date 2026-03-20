import { httpClient } from "../api/httpClient";
import type { Pokemon } from "../types/pokemon";

type PokemonsDTO = {
  results: Pokemon[];
};

class PokemonService {
  getPokemons() {
    return httpClient.get<PokemonsDTO>(`/pokemon?limit=10`);
  }
}

export const pokemonService = new PokemonService();
