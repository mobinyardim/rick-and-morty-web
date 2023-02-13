import { Character } from "models/src/Character";
import { Typography } from "@material-tailwind/react";

export interface CharacterComponentProps {
  className?: string;
  character: Character;
}

export function CharacterComponent({
  className,
  character,
}: CharacterComponentProps) {
  let statusClassName = "";
  switch (character.status) {
    case "Alive": {
      statusClassName = "bg-error";
      break;
    }
    case "Dead": {
      statusClassName = "bg-success";
      break;
    }
    case "Unknown": {
      statusClassName = "bg-onBackgroundMedium";
      break;
    }
  }
  return (
    <div
      className={`flex w-fit overflow-clip rounded-2xl bg-surface lg:w-96 lg:flex-row lg-max:flex-col ${className}`}
    >
      <img
        src={character.image}
        className={`lg:h-36 lg:w-36 lg-max:aspect-square  lg-max:w-60 lg-max:grow`}
      />
      <div className={`flex flex-col p-4`}>
        <Typography variant="h5" className={`text-onBackgroundHigh`}>
          {character.name}
        </Typography>
        <div className={`flex flex-row items-center gap-1`}>
          <div
            className={`aspect-square h-3 w-3 shrink-0 grow-0 ${statusClassName} items-center rounded-full`}
          />
          <Typography variant="paragraph" className={`text-onBackgroundHigh`}>
            {character.status}&ensp;-&ensp;{character.species}
          </Typography>
        </div>
        <div className={`grow`} />
        <Typography variant="paragraph" className={`text-onBackgroundLow`}>
          Last known location:
        </Typography>
        <Typography variant="paragraph" className={`text-onBackgroundHigh`}>
          {character.location.name}
        </Typography>
      </div>
    </div>
  );
}
