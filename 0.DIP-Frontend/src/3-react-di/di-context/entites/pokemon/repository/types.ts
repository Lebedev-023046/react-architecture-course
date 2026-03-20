import type {
  ApiResponse,
  RequestConfig,
} from "@/3-react-di/di-props/shared/api/types";
import type { PokemonsDTO } from "@/3-react-di/di-props/shared/dto/PokemonDto";

export type PokemonRepository = {
  getPokemons(requestConfig?: RequestConfig): ApiResponse<PokemonsDTO>;
};
