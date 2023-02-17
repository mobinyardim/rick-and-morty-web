import { Await, useRouteLoaderData } from "../../../utils/ReactRouterUtils";
import { charactersLoader } from "../../../loaders/characters/CharactersLoader";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { ItemsList } from "../../../components/ItemsList";
import { CharacterComponent } from "../../../components/CharacterComponent";
import { sources } from "../../../remoteSources/common/Sources";
import debounce from "lodash.debounce";
import { useCharactersStore } from "../../../stores/CharctersStore";

export function CharactersScreen() {
  const charactersFirstPage =
    useRouteLoaderData<typeof charactersLoader>("root");

  const charactersStore = useCharactersStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const data = await charactersFirstPage.metrics;
      if (!ignore) {
        setIsLoading(false);
        charactersStore.addCharacters([...data]);
      }
    };
    fetchData().catch(console.error);
    return () => {
      ignore = true;
    };
  }, [charactersFirstPage]);

  const getNextPageData = useMemo(
    () =>
      debounce(async () => {
        if (!isLoading) {
          setIsLoading((_) => true);
          console.log("loading data");

          await sources.charactersSource
            .getCharacters({
              limit: 10,
              offset: charactersStore.characters.length,
            })
            .then((result) => {
              charactersStore.addCharacters(result);
            });
          setIsLoading((_) => false);
        }
      }, 100),
    [isLoading]
  );

  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className="mx-auto flex h-screen w-max flex-shrink-0 flex-col gap-12 pt-5 lg:p-32 ">
        <Suspense
          fallback={
            <ItemsList
              className={""}
              title={"Characters"}
              items={Array.apply(null, Array(10)).map(() => (
                <CharacterComponent className={"col-span-1 h-fit"} />
              ))}
            />
          }
        >
          <Await resolve={charactersFirstPage.metrics}>
            {() => (
              <ItemsList
                className={""}
                title={"Characters"}
                onLoadNext={() => {
                  getNextPageData();
                }}
                items={charactersStore.characters.map((character) => (
                  <CharacterComponent
                    className={"col-span-1 h-fit"}
                    character={character}
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
