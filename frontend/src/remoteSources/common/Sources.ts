import CharactersRemoteSource from "../charactersRemoteSource/CharactersRemoteSource";
import { CharactersRemoteSourceImpl } from "../charactersRemoteSource/CharactersRemoteSourceImpl";

export const sources = {
  charactersSource: new CharactersRemoteSourceImpl() as CharactersRemoteSource,
};
