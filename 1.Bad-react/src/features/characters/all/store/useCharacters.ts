import { useAsync } from "@/shared/hooks/useAsync";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
import type { FavoriteService } from "../../favorites/service/favoriteService";
import type { CharactersService } from "../service/charactersService";
import type { Character } from "../types";

export function useCharacters({
	charactersService,
	favoriteService,
}: {
	charactersService: CharactersService;
	favoriteService: FavoriteService;
}) {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 300);

	const memoizedCallback = useCallback(
		() => charactersService.findByName(debouncedQuery),
		[charactersService, debouncedQuery],
	);

	const {
		data: items,
		loading,
		error,
	} = useAsync<Character[]>(memoizedCallback);

	const [favorites, setFavorites] = useState<Record<number, Character>>(
		() => items ?? favoriteService.getFavorites(),
	);

	const list = Object.values(favorites);
	const isFavorite = (id: number) => Boolean(favorites[id]);

	const toggleFavorite = (char: Character) =>
		setFavorites((prev) => {
			return favoriteService.toggleFavorite(prev, char);
		});

	const clearFavorites = () => {
		favoriteService.removeAllFavorites();
		setFavorites({});
	};

	useEffect(() => {
		favoriteService.setFavorites(favorites);
	}, [favorites, favoriteService]);

	return {
		query,
		setQuery,
		loading,
		items,
		error,
		searchNow: () => charactersService.findByName(query),

		// favorites
		list,
		isFavorite,
		toggleFavorite,
		clearFavorites,
	};
}
