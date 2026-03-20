import { useCharactersStore } from "@/entites/character/store/store/useCharactersStore";
import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import {
  charactersCatalogInjector,
  type CharactersCatalogDeps,
} from "@/features/charactersCatalogFeature/di";

export function CharactersPage() {
  const {
    characters,
    isCharactersError,
    isCharactersLoading,
    actions: { toggleFavorite, fetchCharacters },
  } = useCharactersStore((state) => state);

  const deps: CharactersCatalogDeps = {
    characters,
    isCharactersError,
    isCharactersLoading,
    toggleFavorite,
    fetchCharacters
  };

  return (
    <charactersCatalogInjector.Provider value={deps}>
      <CharactersCatalogFeature />
    </charactersCatalogInjector.Provider>
  );
}
