import { httpClient } from "@/shared/api/httpClient";
import type { ApiResponse } from "@/shared/api/types";
import type { CharacterDTO } from "@/shared/dto/CharactersDto";
import type { CharacterRepository } from "./types";

export class CharactersApi implements CharacterRepository {
	private ENDPOINT = "character";

	async findByName(name: string): Promise<ApiResponse<CharacterDTO[]>> {
		return httpClient.get<ApiResponse<CharacterDTO[]>>(this.ENDPOINT, {
			params: { name },
		});
	}
}
