import { create } from "zustand";
import { Character } from "models/src/Character";

interface CharactersState {
  characters: Character[];
  addCharacters: (newCharacters: Character[]) => void;
}

export const useCharactersStore = create<CharactersState>((set) => ({
  characters: new Array<Character>(),
  addCharacters: (newCharacters: Character[]) =>
    set((state: CharactersState) => ({
      characters: [...state.characters, ...newCharacters],
    })),
}));
