import {
	CharacterCard,
	CharacterList,
	useCharacters,
} from "@/features/characters/all";
import { charactersService } from "@/features/characters/all/service/charactersService";
import { favoriteService } from "@/features/characters/favorites";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Star } from "lucide-react";

export function FavoritesPage() {
	const { list, isFavorite, toggleFavorite, clearFavorites } = useCharacters({
		charactersService,
		favoriteService,
	});

	return (
		<div className="p-4">
			<div className="flex items-center justify-between mb-2">
				<h2 className="text-xl font-semibold">Favorites</h2>
				{list.length > 0 && (
					<button
						className="text-sm underline text-muted-foreground"
						onClick={clearFavorites}
						title="Clear all favorites"
					>
						Clear all
					</button>
				)}
			</div>
			<CharacterList
				characters={list}
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
