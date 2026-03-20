import { useCharactersStore } from "./useCharactersStore";

export const useCharacters = () =>
  useCharactersStore((state) => state.characters);

export const useFavoriteCharacters = () => {
  return useCharacters().filter((character) => character.isFavorite);
};

export const useCharactersActions = () =>
  useCharactersStore((state) => state.actions);
