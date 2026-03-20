import { httpClient } from "../../../shared/api/httpClient";
import type { RequestConfig } from "../../../shared/api/types";
import type { PokemonRepository } from "./types";

export class PokemonApi implements PokemonRepository {
  ENDPOINT = "/pokemon";

  async getPokemons(requestConfig?: RequestConfig) {
    return httpClient.get(this.ENDPOINT, requestConfig?.config);
  }
}
