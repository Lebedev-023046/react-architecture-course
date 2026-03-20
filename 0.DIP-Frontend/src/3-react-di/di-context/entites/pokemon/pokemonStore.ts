import { create } from "zustand";
import type { Pokemon } from "./types";
import type { ApiResponse } from "../../shared/api/types";
import { nanoid } from "nanoid";

type PokemonsStore = {
  pokemons: Pokemon[];
  fetchPokemons: () => void;
  addPokemon: (name: string) => void;
  deletePokemon: (id: string) => void;
};

export const createPokemonsStore = ({
  getPokemons,
}: {
  getPokemons(): ApiResponse<Pokemon[]>;
}) => {
  return create<PokemonsStore>((set) => ({
    pokemons: [],
    fetchPokemons: async () => {
      const { data: pokemons } = await getPokemons();

      set({ pokemons });
    },
    addPokemon: (name: string) =>
      set((state) => ({
        pokemons: [{ name, id: nanoid() }, ...state.pokemons],
      })),
    deletePokemon: async (id: string) => {
      set((state) => ({
        pokemons: state.pokemons.filter((p) => p.id !== id),
      }));
    },
  }));
};
