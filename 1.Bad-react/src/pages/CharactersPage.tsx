import {
	CharacterCard,
	CharacterList,
	useCharacters,
} from "@/features/characters/all";
import { charactersService } from "@/features/characters/all/service/charactersService";
import { favoriteService } from "@/features/characters/favorites";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { SearchBar } from "@/shared/ui/SearchBar";
import { Star } from "lucide-react";

export function CharactersPage() {
	const { query, setQuery, loading, items, error, isFavorite, toggleFavorite } =
		useCharacters({
			charactersService,
			favoriteService,
		});

	return (
		<div className="p-4">
			<div className="mb-4">
				<SearchBar value={query} onChange={setQuery} loading={loading} />
			</div>

			{error && <div className="text-red-600">Error: {error}</div>}

			<CharacterList
				characters={items}
				renderCharacters={(c) => (
					<CharacterCard
						key={c.id}
						character={c}
						action={
							<Button
								variant="secondary"
								size="icon"
								className={cn(
									"absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white",
								)}
								onClick={() => toggleFavorite(c)}
								title={
									isFavorite(c.id)
										? "Remove from favorites"
										: "Add to favorites"
								}
							>
								<Star
									className={cn(
										"h-5 w-5",
										isFavorite(c.id) && "fill-red-500 text-red-500",
									)}
								/>
							</Button>
						}
					/>
				)}
			/>
		</div>
	);
}
