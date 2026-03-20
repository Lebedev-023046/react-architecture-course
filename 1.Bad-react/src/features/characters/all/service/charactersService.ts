import { CharactersApi } from "../repository/charactersApi";
import type { CharacterRepository } from "../repository/types";
import type { Character } from "../types";

export class CharactersService {
	private repository: CharacterRepository;

	constructor(repository: CharacterRepository) {
		this.repository = repository;
		this.findByName = this.findByName.bind(this);
	}

	async findByName(name: string): Promise<Character[]> {
		const resultInfo = await this.repository.findByName(name);

		return (resultInfo?.results ?? []).map((c) => ({
			...c,
			id: c.id,
			name: c.name,
			image: c.image,
			status: c.status,
			species: c.species,
		}));
	}
}

export const charactersService = new CharactersService(new CharactersApi());
