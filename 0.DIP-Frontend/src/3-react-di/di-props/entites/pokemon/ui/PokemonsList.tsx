import { type ReactNode } from "react";
import { List } from "../../../shared/ui/List";
import type { Pokemon } from "../types";
import  { cn } from "@/3-react-di/di-context/shared/lib/utils";

type PokemonsListProps = {
  pokemons: Pokemon[];
  renderPokemon: (pokemon: Pokemon) => ReactNode;
  className?: string
};

// Passive View
export const PokemonsList = ({
  pokemons,
  renderPokemon,
  className
}: PokemonsListProps) => {
  return <List className={cn("pokemonsList", className)} data={pokemons} renderData={renderPokemon} />;
};
