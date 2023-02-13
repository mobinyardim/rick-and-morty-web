import { generateFakeCharacterList } from "./Utils";
import { CharacterComponent } from "../../../components/CharacterComponent";
import { Typography } from "@material-tailwind/react";

export function HomeScreen() {
  const characters = generateFakeCharacterList();

  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className="flex h-screen w-max flex-shrink-0 flex-col gap-12 pr-5 pt-5 lg:pl-40">
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

        <ItemsList
          key={"moz"}
          className={""}
          title={"Episodes"}
          items={characters.map((character) => (
            <CharacterComponent
              className={"col-span-1 row-span-1 h-fit"}
              character={character}
            />
          ))}
        />
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
        <Typography variant="h4" className={"text-primary"}>
          {title}
        </Typography>
        <div className="grow" />
        <Typography variant="small" onClick={onSeeMore}>
          See More
        </Typography>
      </div>
      <div className={`h-4 flex-shrink-0`} />
      <div
        className={`grid h-fit w-fit max-w-[100vw] flex-shrink-0 auto-cols-max grid-flow-col auto-rows-max justify-items-center gap-4 overflow-x-auto lg:grid-rows-3 2xl:grid-rows-2`}
      >
        <div className={"h-4 w-4"} />
        {items.map((item) => item)}
        <div className={"h-4 w-4"} />
      </div>
    </div>
  );
}
