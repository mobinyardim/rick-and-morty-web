import { Await, useRouteLoaderData } from "../../../utils/ReactRouterUtils";
import { charactersLoader } from "../../../loaders/characters/CharactersLoader";
import React, { Suspense, useCallback, useState } from "react";
import { ItemsList } from "../../../components/ItemsList";
import { CharacterComponent } from "../../../components/CharacterComponent";
import { sources } from "../../../remoteSources/common/Sources";
import { useCharactersStore } from "../../../stores/CharctersStore";
import { Character } from "models/src/Character";
import { Pagination } from "models/src/Result";

export function CharactersScreen() {
  const charactersFirstPage =
    useRouteLoaderData<typeof charactersLoader>("root");

  const charactersStore = useCharactersStore();
  const [isLoading, setIsLoading] = useState(false);

  const addCharacters = useCallback(
    (characters: Character[], pagination?: Pagination) => {
      charactersStore.addCharacters(characters, pagination);
    },
    [charactersStore]
  );

  const addPlaceHolders = useCallback(
    (count: number) => {
      charactersStore.addPlaceHolders(count);
    },
    [charactersStore]
  );

  const removePlaceHolders = useCallback(() => {
    charactersStore.removePlaceHolders();
  }, [charactersStore]);

  async function getNextPageData() {
    if (!isLoading) {
      setIsLoading((_) => true);

      const total = charactersStore.lastPagination?.totalCount ?? 0;
      const mod = total - charactersStore.characters.length;
      const placeHolderCount = mod > 10 ? 10 : mod % 10;
      addPlaceHolders(placeHolderCount);

      await sources.charactersSource
        .getCharacters({
          limit: 10,
          offset: charactersStore.characters.length,
        })
        .then((result) => {
          removePlaceHolders();
          addCharacters(result.data, result.pagination);
        });
      setIsLoading((_) => false);
    }
  }

  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className="mx-auto flex h-screen w-max flex-shrink-0 flex-col gap-12 pt-5 lg:p-32 ">
        <Suspense
          fallback={
            <ItemsList
              className={""}
              title={"Characters"}
              items={Array.apply(null, Array(10)).map(() => (
                <CharacterComponent
                  className={"col-span-1 h-fit"}
                  key={crypto.randomUUID()}
                />
              ))}
            />
          }
        >
          <Await resolve={charactersFirstPage.metrics}>
            {() => (
              <ItemsList
                className={""}
                title={"Characters"}
                onLoadNext={getNextPageData}
                items={charactersStore.characters.map((character) => (
                  <CharacterComponent
                    className={"col-span-1 h-fit"}
                    character={character}
                    key={character?.id ?? crypto.randomUUID()}
                  />
                ))}
              />
            )}
          </Await>
        </Suspense>

        <div className={"shrink-0 lg-max:h-10"} />
      </div>
    </div>
  );
}
