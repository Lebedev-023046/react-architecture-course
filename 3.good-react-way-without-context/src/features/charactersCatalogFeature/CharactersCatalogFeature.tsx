import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { CharacterList } from "@/entites/character/ui/CharacterList";
import { Input } from "@/shared/ui/input";
import { Spinner } from "@/shared/ui/spinner";
import { useDi } from "./di";
import { useCatalogForm } from "./useCatalogForm";

export function CharactersCatalogFeature() {
  const {
    isCharactersError,
    isCharactersLoading,
    characters,
    toggleFavorite,
    fetchCharacters,
  } = useDi();

  const { searchQuery, setSearchQuery } = useCatalogForm(fetchCharacters);

  return (
    <div className="p-4 mb-4">
      <Input
        placeholder="Find character by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isCharactersLoading && (
        <Spinner className="flex justify-center mx-auto mt-5" />
      )}

      {!isCharactersError && characters ? (
        <CharacterList
          characters={characters}
          renderCharacter={(character) => (
            <CharacterCard
              character={character}
              isFavorite={character.isFavorite}
              onToggleFavorite={toggleFavorite}
            />
          )}
        />
      ) : (
        <div className="text-sm text-muted-foreground mt-4">
          Таких персонажей нет
        </div>
      )}
    </div>
  );
}
