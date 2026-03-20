import { type ReactNode } from "react";
import { List } from "../../../shared/ui/List";
import type { Pokemon } from "../types";

type PokemonsListProps = {
  pokemons: Pokemon[];
  renderPokemon: (pokemon: Pokemon) => ReactNode;
};

export const PokemonsList = ({
  pokemons,
  renderPokemon,
}: PokemonsListProps) => {
  return <List data={pokemons} renderData={renderPokemon} />;
};
