import type {
  CharactersRepository,
  FavoriteCharactersRepository,
} from "../repository/types";
import { CharacterModel } from "@/entites/character/model/CharacterModel";

export class CharactersService {
  constructor(
    private readonly charactersRepo: CharactersRepository,
    private readonly favoritesRepo: FavoriteCharactersRepository,
    private readonly characterModel: CharacterModel,
  ) {}

  async getCharacters(name: string = "") {
    const [{ data }, ids] = await Promise.all([
      this.charactersRepo.getCharacters({
        options: { params: { name } },
      }),
      this.favoritesRepo.getFavoriteCharacterIds(),
    ]);

    const characters = CharacterModel.mapDtoToCharacter(data).map(
      (character) => ({
        ...character,
        isFavorite: ids.includes(character.id),
      }),
    );

    this.characterModel.setCharacters(characters);

    return characters;
  }

  public getFavoriteCharacters() {
    return this.characterModel.getFavoriteCharacters();
  }

  public async toggleFavorite(id: number) {
    await this.favoritesRepo.toggleFavorite(id);

    return this.characterModel.toggleCharacter(id);
  }

  public async clearFavorites() {
    await this.favoritesRepo.clearFavorites();

    return this.characterModel.clearCharacters();
  }
}
