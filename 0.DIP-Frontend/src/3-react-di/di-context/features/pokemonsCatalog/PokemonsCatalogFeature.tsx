import { useEffect } from "react";
import { useDI } from "./di/di";
import { AddPokemonForm } from "./ui/AddPokemonForm";
import { PokemonsList } from "./ui/PokemonsList";
import { PokemonCard } from "./ui/PokemonCard";
import { Button } from "../../shared/ui/button";

export const PokemonsCatalogFeature = () => {
  const { fetchPokemons, deletePokemon, pokemons } = useDI();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Pokemons</h1>
      <AddPokemonForm />
      <PokemonsList
        pokemons={pokemons}
        renderPokemon={({ name, id }) => (
          <PokemonCard
            name={name}
            action={
              <Button variant="destructive" onClick={() => deletePokemon(id)}>
                Удалить
              </Button>
            }
          />
        )}
      />
    </div>
  );
};
