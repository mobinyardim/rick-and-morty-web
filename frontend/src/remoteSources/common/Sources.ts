import CharactersRemoteSource from "../charactersRemoteSource/CharactersRemoteSource";
import { CharactersRemoteSourceImpl } from "../charactersRemoteSource/CharactersRemoteSourceImpl";
import { UserRemoteSource } from "../userRemoteSource/UserRemoteSource";
import { UserRemoteSourceImpl } from "../userRemoteSource/UserRemoteSourceImpl";

export const sources = {
  userSource: new UserRemoteSourceImpl() as UserRemoteSource,
  charactersSource: new CharactersRemoteSourceImpl() as CharactersRemoteSource,
};
