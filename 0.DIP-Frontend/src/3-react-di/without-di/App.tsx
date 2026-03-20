import { AddPokemonForm } from "./components/AddPokemonForm/AddPokemonForm.tsx";
import { PokemonsList } from "./components/PokemonsList.tsx";

import styles from "./App.module.css";

// Composition Root
export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokemons</h1>
      <AddPokemonForm />
      <PokemonsList />
    </div>
  );
};
