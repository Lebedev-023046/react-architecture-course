import { useEffect } from "react";
import { PokemonCard } from "../entites/pokemon/ui/PokemonCard";
import { PokemonsList } from "../entites/pokemon/ui/PokemonsList";
import { AddPokemonForm } from "./components/AddPokemonForm";
import { Button } from "../shared/ui/button";
import { setupDeps } from "./setupDeps";

const { usePokemons } = setupDeps();

export const PokemonsPage = () => {
  const { pokemons, fetchPokemons, addPokemon, deletePokemon } = usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Pokemons</h1>
      <AddPokemonForm onAdd={addPokemon} />
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
