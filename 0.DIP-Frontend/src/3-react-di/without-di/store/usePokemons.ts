import { create } from "zustand";
import { pokemonService } from "../services/PokemonService.ts";
import { type Pokemon } from "../types/pokemon.ts";

type PokemonsStore = {
  pokemons: Pokemon[];
  fetchPokemons: () => Promise<void>;
  addPokemon: (name: string) => void;
  removePokemon: (name: string) => void;
};

export const usePokemons = create<PokemonsStore>((set) => ({
  pokemons: [],
  fetchPokemons: async () => {
    const { data } = await pokemonService.getPokemons();
    set({ pokemons: data.results });
  },
  addPokemon: (name: string) =>
    set((state) => ({
      pokemons: [{ name, url: "" }, ...state.pokemons],
    })),
  removePokemon: (name: string) =>
    set((state) => ({
      pokemons: state.pokemons.filter((p) => p.name !== name),
    })),
}));
