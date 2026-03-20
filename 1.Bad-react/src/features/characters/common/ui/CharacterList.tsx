import { List } from "@/shared/ui/List";
import type { Character } from "../../all/types";

interface Props {
	characters: Character[] | null;
	renderCharacters: (character: Character) => React.ReactNode;
}

export const CharacterList = ({ characters, renderCharacters }: Props) => {
	if (!characters?.length)
		return <div className="text-sm text-muted-foreground mt-4">No results</div>;

	return (
		<List
			className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
			data={characters}
			renderData={renderCharacters}
		/>
	);
};
