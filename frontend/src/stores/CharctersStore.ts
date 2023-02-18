import { create } from "zustand";
import { Character } from "models/src/Character";
import { Pagination } from "models/src/Result";

interface CharactersState {
  characters: Character[];
  lastPagination?: Pagination;
  addCharacters: (newCharacters: Character[],pagination?:Pagination) => void;
}

export const useCharactersStore = create<CharactersState>((set) => ({
  characters: new Array<Character>(),
  addCharacters: (newCharacters: Character[],pagination?:Pagination) =>
    set((state: CharactersState) => ({
      characters: [...state.characters, ...newCharacters],
      lastPagination: pagination
    })),
}));
