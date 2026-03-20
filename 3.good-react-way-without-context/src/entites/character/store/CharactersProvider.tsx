import { useEffect, useState, type ReactNode } from "react";
import { createCharactersStore } from "./store/createCharactersStore";
import { CharactersStoreCtx } from "./store/useCharactersStore";
import type { Character } from "../model/types";

type CharactersStoreDeps = {
  charactersService: {
    getCharacters(name?: string): Promise<Character[]>;
    getFavoriteCharacters(): Character[];
    toggleFavorite(id: number): Promise<Character[]>;
    clearFavorites(): Promise<Character[]>;
  };
};

export const createCharactersProvider = ({
  charactersService,
}: CharactersStoreDeps) => {
  const CharactersProvider = ({ children }: { children: ReactNode }) => {
    const [store] = useState(() =>
      createCharactersStore({ charactersService }),
    );

    useEffect(() => {
      store.getState().actions.fetchCharacters();
    }, []);

    return (
      <CharactersStoreCtx.Provider value={store}>
        {children}
      </CharactersStoreCtx.Provider>
    );
  };

  return CharactersProvider;
};
