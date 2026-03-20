import type { Character } from "@/features/characters/all";
import { LocalStorageFavoriteApi } from "../repository/localStorageFavoriteApi";
import type { FavoriteRepository } from "../repository/types";

export class FavoriteService {
	private repository: FavoriteRepository;

	constructor(repository: FavoriteRepository) {
		this.repository = repository;
	}

	getFavorites(): Record<number, Character> {
		return this.repository.getFavorites();
	}

	setFavorites(characters: Record<number, Character>): void {
		this.repository.setFavorites(characters);
	}

	toggleFavorite(
		characters: Record<number, Character>,
		char: Character,
	): Record<number, Character> {
		const next = { ...characters };
		if (next[char.id]) delete next[char.id];
		else next[char.id] = char;
		return next;
	}

	removeAllFavorites(): void {
		this.repository.removeAllFavorites();
	}
}

export const favoriteService = new FavoriteService(
	new LocalStorageFavoriteApi(),
);
