import { Await, useRouteLoaderData } from "../../../utils/ReactRouterUtils";
import { charactersLoader } from "../../../loaders/characters/CharactersLoader";
import { useImmer } from "use-immer";
import { Character } from "models/src/Character";
import React, { Suspense, useEffect } from "react";
import { ItemsList } from "../../../components/ItemsList";
import { CharacterComponent } from "../../../components/CharacterComponent";

export function CharactersScreen() {
  const charactersFirstPage =
    useRouteLoaderData<typeof charactersLoader>("root");

  const [characters, setCharacters] = useImmer<Character[]>([]);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const data = await charactersFirstPage.metrics;
      if (!ignore) {
        setCharacters((draft) => {
          return [...data, ...draft];
        });
      }
    };
    fetchData().catch(console.error);
    return () => {
      ignore = true;
    };
  }, [charactersFirstPage]);

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
                items={characters.map((character) => (
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
