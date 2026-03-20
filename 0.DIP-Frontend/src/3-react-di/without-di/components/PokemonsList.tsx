import { useEffect } from "react";
import { usePokemons } from "../store/usePokemons";
import { PokemonCard } from "./PokemonCard/PokemonCard";

export const PokemonsList = () => {
  const pokemons = usePokemons((s) => s.pokemons);
  const fetchPokemons = usePokemons((s) => s.fetchPokemons);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((p) => (
        <PokemonCard key={p.name} name={p.name} />
      ))}
    </div>
  );
};
