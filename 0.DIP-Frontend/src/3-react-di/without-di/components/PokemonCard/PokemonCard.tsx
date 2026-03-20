import { usePokemons } from "../../store/usePokemons";

import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ name }: { name: string }) => {
  const removePokemon = usePokemons((s) => s.removePokemon);

  return (
    <div className={styles.card}>
      <span className={styles.name}>{name}</span>
      <button className={styles.button} onClick={() => removePokemon(name)}>
        Удалить
      </button>
    </div>
  );
};
