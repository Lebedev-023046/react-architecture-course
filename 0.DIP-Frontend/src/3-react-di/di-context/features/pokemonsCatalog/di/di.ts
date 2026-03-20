import type { Pokemon } from "@/3-react-di/di-context/entites/pokemon/types";
import {
  createStrictContext,
  useStrictContext,
} from "@/3-react-di/di-context/shared/lib/react";

export type PokemonsCatalogDeps = {
  pokemons: Pokemon[];
  fetchPokemons: () => void;
  addPokemon: (name: string) => void;
  deletePokemon: (id: string) => void;
};

export const pokemonsCatalogInjector =
  createStrictContext<PokemonsCatalogDeps>();
export const useDI = () => useStrictContext(pokemonsCatalogInjector);
