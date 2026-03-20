import { setupDeps } from "./setupDeps";
import {
  pokemonsCatalogInjector,
  type PokemonsCatalogDeps,
} from "../features/pokemonsCatalog/di/di";
import { PokemonsCatalogFeature } from "../features/pokemonsCatalog/PokemonsCatalogFeature";

const { usePokemons } = setupDeps();

export const PokemonsPage = () => {
  const { addPokemon, fetchPokemons, deletePokemon, pokemons } = usePokemons();

  const deps: PokemonsCatalogDeps = {
    addPokemon,
    fetchPokemons,
    deletePokemon,
    pokemons,
  };

  return (
    <pokemonsCatalogInjector.Provider value={deps}>
      <PokemonsCatalogFeature />;
    </pokemonsCatalogInjector.Provider>
  );
};
