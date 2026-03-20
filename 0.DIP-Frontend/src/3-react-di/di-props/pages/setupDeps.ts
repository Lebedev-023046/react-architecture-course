import { PokemonService } from "../entites/pokemon/PokemonService";
import { createPokemonsStore } from "../entites/pokemon/pokemonStore";
import { PokemonApi } from "../entites/pokemon/repository/PokemonApi";

export const setupDeps = () => {
  const pokemonService = new PokemonService(new PokemonApi());

  const usePokemons = createPokemonsStore({
    getPokemons: () =>
      pokemonService.getPokemons({
        config: {
          params: {
            limit: 10,
          },
        },
      }),
  });

  return { usePokemons };
};
