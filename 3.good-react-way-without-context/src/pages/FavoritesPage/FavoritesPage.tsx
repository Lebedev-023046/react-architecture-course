import { CharacterList } from "@/entites/character/ui/CharacterList";
import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { Button } from "@/shared/ui/button";
import {
  useCharactersActions,
  useFavoriteCharacters,
} from "@/entites/character/store/store/charactersSelectors";

export function FavoritesPage() {
  const { clearFavorites, toggleFavorite } = useCharactersActions();
  const favoriteCharacters = useFavoriteCharacters();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {favoriteCharacters && favoriteCharacters.length > 0 && (
        <>
          <Button onClick={clearFavorites} title="Clear all favorites">
            Clear all
          </Button>
          <CharacterList
            characters={favoriteCharacters}
            renderCharacter={(character) => (
              <CharacterCard
                character={character}
                isFavorite={character.isFavorite}
                onToggleFavorite={toggleFavorite}
              />
            )}
          />
        </>
      )}
    </div>
  );
}
