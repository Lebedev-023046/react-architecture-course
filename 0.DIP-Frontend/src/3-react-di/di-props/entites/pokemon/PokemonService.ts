import type { ApiResponse, RequestConfig } from "../../shared/api/types";
import { type Pokemon } from "./types";
import { nanoid } from "nanoid";
import type { PokemonRepository } from "./repository/types";

export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  async getPokemons(requestConfig?: RequestConfig): ApiResponse<Pokemon[]> {
    const response = await this.pokemonRepository.getPokemons(requestConfig);

    return {
      ...response,
      data: response.data.results.map((result) => ({
        name: result.name,
        id: nanoid(),
      })),
    };
  }
}
