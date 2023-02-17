import { Await, useRouteLoaderData } from "../../../utils/ReactRouterUtils";
import { Character } from "models/src/Character";
import React, { Suspense } from "react";
import { CharacterComponent } from "../../../components/CharacterComponent";
import { useNavigate } from "react-router-dom";
import { charactersLoader } from "../../../loaders/characters/CharactersLoader";
import { ItemsList } from "../../../components/ItemsList";

export function HomeScreen() {
  const navigate = useNavigate();
  const characters = useRouteLoaderData<typeof charactersLoader>("root");

  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className="mx-auto flex h-screen w-max flex-shrink-0 flex-col gap-12 pt-5 lg:p-32 ">
        <Suspense
          fallback={
            <ItemsList
              className={""}
              isSeeMoreButtonVisible={true}
              onSeeMore={() => {
                navigate("/characters");
              }}
              title={"Characters"}
              items={Array.apply(null, Array(10)).map(() => (
                <CharacterComponent className={"col-span-1 h-fit"} />
              ))}
            />
          }
        >
          <Await resolve={characters.metrics}>
            {(characters: Awaited<Character>[]) => (
              <ItemsList
                className={""}
                title={"Characters"}
                isSeeMoreButtonVisible={true}
                onSeeMore={() => {
                  navigate("/characters");
                }}
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
