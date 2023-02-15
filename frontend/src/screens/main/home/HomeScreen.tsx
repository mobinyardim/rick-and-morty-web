import { Typography } from "@material-tailwind/react";
import * as BsIcon from "react-icons/bs";
import {
  Await,
  deferredLoader,
  useLoaderData,
} from "../../../utils/ReactRouterUtils";
import { sources } from "../../../remoteSources/common/Sources";
import { Character } from "models/src/Character";
import React, { Suspense } from "react";
import { CharacterComponent } from "../../../components/CharacterComponent";

export const charactersLoader = deferredLoader((args) => ({
  metrics: sources.charactersSource.getCharacters(),
}));

export function HomeScreen() {
  const characters = useLoaderData<typeof charactersLoader>();

  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className="flex h-screen w-max flex-shrink-0 flex-col gap-12 pr-5 pt-5 lg:pl-40">
        <Suspense
          fallback={
            <ItemsList
              className={""}
              title={"Locations"}
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
                title={"Locations"}
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

interface ItemsListProp {
  className: string;
  title: string;
  onSeeMore?: VoidFunction;
  items: JSX.Element[];
}

function ItemsList({ className, items, title, onSeeMore }: ItemsListProp) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className={"flex max-w-[100vw] flex-row items-center px-8"}>
        <Typography variant="h4" className={"text-onBackgroundMedium"}>
          {title}
        </Typography>
        <div className="grow" />
        <Typography
          variant="small"
          onClick={onSeeMore}
          className={"text-primary"}
        >
          See More
        </Typography>
        <BsIcon.BsChevronDoubleRight className={"h-4 w-4 text-primary"} />
      </div>
      <div className={`h-4 flex-shrink-0`} />
      <div
        className={`grid h-fit w-fit max-w-[100vw] flex-shrink-0 auto-cols-max grid-flow-col auto-rows-max justify-items-center gap-4 overflow-x-auto lg:grid-rows-3 2xl:grid-rows-2`}
      >
        <div className={"h-4 w-4 lg:hidden"} />
        {items.map((item) => item)}
        <div className={"h-4 w-4 lg:hidden"} />
      </div>
    </div>
  );
}
