import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { usePokemons } from "../../store/usePokemons";

import styles from "./AddPokemonForm.module.css";

export const AddPokemonForm = () => {
  const [value, setValue] = useState("");
  const addPokemon = usePokemons((s) => s.addPokemon);

  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim()) {
      addPokemon(value);
      setValue("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id={id}
        className={styles.input}
        type="text"
        placeholder="Напиши имя покемона"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
};
