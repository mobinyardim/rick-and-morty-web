import { create } from "zustand";
import { Character } from "models/src/Character";
import { Pagination } from "models/src/Result";
import produce from "immer";

interface CharactersState {
  characters: (Character | undefined)[];
  lastPagination?: Pagination;
  addCharacters: (newCharacters: Character[], pagination?: Pagination) => void;

  addPlaceHolders: (count: number) => void;
  removePlaceHolders: () => void;
}

export const useCharactersStore = create<CharactersState>((set) => ({
  characters: new Array<Character>(),
  addCharacters: (newCharacters: Character[], pagination?: Pagination) =>
    set(
      produce((state: CharactersState) => {
        state.characters.push(...newCharacters);
        state.lastPagination = pagination;
      })
    ),
  addPlaceHolders: (count: number) => {
    const placeHolders = Array.apply(undefined, Array(count)) as (
      | Character
      | undefined
    )[];

    set(
      produce((state: CharactersState) => {
        state.characters.push(...placeHolders);
      })
    );
  },
  removePlaceHolders: () => {
    set(
      produce((state: CharactersState) => {
        state.characters = state.characters.filter((it) => it !== undefined);
      })
    );
  },
}));
