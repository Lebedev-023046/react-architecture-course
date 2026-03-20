import type { CharacterDTO } from "@/shared/dto/CharactersDto";
import type { FavoriteRepository } from "./types";

export class LocalStorageFavoriteApi implements FavoriteRepository {
	private LS_KEY = "favorites_characters_v1";

	private read(): Record<number, CharacterDTO> {
		return JSON.parse(localStorage.getItem(this.LS_KEY) ?? "{}");
	}

	private write(favorites: Record<number, CharacterDTO>) {
		localStorage.setItem(this.LS_KEY, JSON.stringify(favorites));
	}

	getFavorites(): Record<number, CharacterDTO> {
		return this.read();
	}

	setFavorites(favorites: Record<number, CharacterDTO>) {
		this.write(favorites);
	}

	removeAllFavorites() {
		localStorage.removeItem(this.LS_KEY);
	}
}
