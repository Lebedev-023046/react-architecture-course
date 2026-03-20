import type { ApiResponse } from "@/shared/api/types";
import type { CharacterDTO } from "@/shared/dto/CharactersDto";

export interface CharacterRepository {
	findByName(name: string): Promise<ApiResponse<CharacterDTO[]>>;
}
