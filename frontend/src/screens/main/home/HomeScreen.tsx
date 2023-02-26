import { Await, useRouteLoaderData } from "../../../utils/ReactRouterUtils";
import { Character } from "models/src/Character";
import React, { Suspense } from "react";
import { CharacterComponent } from "../../../components/CharacterComponent";
import { useNavigate } from "react-router-dom";
import { charactersLoader } from "../../../loaders/characters/CharactersLoader";
import { ItemsList } from "../../../components/ItemsList";
import { Result } from "models/src/Result";
import { Typography } from "@material-tailwind/react";

export function HomeScreen() {
  const navigate = useNavigate();
  const characters = useRouteLoaderData<typeof charactersLoader>("root");

  return (
    <div className={`h-fit w-full`}>
      <div className="mx-auto flex h-screen w-max flex-shrink-0 flex-col gap-12 pt-5 lg:p-32">
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
                <CharacterComponent
                  className={"col-span-1 h-fit"}
                  key={crypto.randomUUID()}
                />
              ))}
            />
          }
        >
          <Await
            resolve={characters.metrics}
            errorElement={
              <div>
                <Typography variant={"h1"}>Error in loading data</Typography>
              </div>
            }
          >
            {(characters: Awaited<Result<Character[]>>) => (
              <div>
                {characters.kind === "success" && (
                  <ItemsList
                    className={""}
                    title={"Characters"}
                    isSeeMoreButtonVisible={true}
                    onSeeMore={() => {
                      navigate("/characters");
                    }}
                    items={characters.data?.map((character) => (
                      <CharacterComponent
                        className={"col-span-1 h-fit"}
                        key={character?.id ?? crypto.randomUUID()}
                        character={character}
                      />
                    ))}
                  />
                )}
                {characters.kind === "fail" && (
                  <Typography variant={"h1"}>{characters.message}</Typography>
                )}
              </div>
            )}
          </Await>
        </Suspense>

        <div className={"shrink-0 lg-max:h-10"} />
      </div>
    </div>
  );
}
