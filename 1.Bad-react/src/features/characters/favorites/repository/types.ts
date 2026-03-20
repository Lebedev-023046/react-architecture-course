import type { CharacterDTO } from "@/shared/dto/CharactersDto";

export interface FavoriteRepository {
	getFavorites(): Record<number, CharacterDTO>;
	setFavorites(characters: Record<number, CharacterDTO>): void;
	removeAllFavorites(): void;
}
