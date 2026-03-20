import { useId, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";

// View
export const AddPokemonForm = ({
  onAdd,
}: {
  onAdd: (value: string) => void;
}) => {
  const [value, setValue] = useState("");

  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
      <Input
        id={id}
        type="text"
        placeholder="Напиши имя покемона"
        value={value}
        onChange={handleChange}
        className="flex-1"
      />
      <Button type="submit">Добавить</Button>
    </form>
  );
};
