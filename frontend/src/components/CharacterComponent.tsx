import { Character } from "models/src/Character";
import { Typography } from "@material-tailwind/react";

export interface CharacterComponentProps {
  className?: string;
  character?: Character;
}

export function CharacterComponent({
  className,
  character,
}: CharacterComponentProps) {
  let statusClassName = "";
  switch (character?.status) {
    case "Alive": {
      statusClassName = "bg-success";
      break;
    }
    case "Dead": {
      statusClassName = "bg-error";
      break;
    }
    case "Unknown": {
      statusClassName = "bg-onBackgroundMedium";
      break;
    }
    default: {
      statusClassName = "";
      break;
    }
  }

  return (
    <div
      className={`lg-max:min-w-44 max-w-md:w-64 flex overflow-clip rounded-2xl bg-surface lg:w-96 lg:flex-row lg-max:h-full lg-max:w-56 lg-max:w-full lg-max:flex-col ${className}`}
    >
      <img
        src={character?.image ?? "/assets/transparent.png"}
        className={`aspect-square w-full bg-clip-content lg:h-36  lg:w-36 lg-max:max-h-64  ${
          character ? "" : "shimmer"
        }`}
        alt={" "}
      />
      <div className={`flex flex-col p-4`}>
        <Typography
          variant="h5"
          className={`truncate text-onBackgroundHigh  ${
            character ? "" : "shimmer-text-m"
          }`}
        >
          {character?.name}
        </Typography>
        <div className={`mt-1 flex flex-row items-center gap-1`}>
          <div
            className={`aspect-square h-3 w-3 shrink-0 grow-0 ${statusClassName} items-center rounded-full ${
              character ? "" : "shimmerRounded"
            }`}
          />
          <div className={`flex flex-row items-center gap-1`}>
            <Typography
              variant="paragraph"
              className={`truncate text-onBackgroundHigh ${
                character ? "" : "shimmer-text-s"
              }`}
            >
              {character?.status}
            </Typography>
            <Typography variant="paragraph" className={`text-onBackgroundHigh`}>
              &ensp;-&ensp;
            </Typography>
            <Typography
              variant="paragraph"
              className={`truncate text-onBackgroundHigh ${
                character ? "" : "shimmer-text-s"
              }`}
            >
              {character?.species}
            </Typography>
          </div>
        </div>
        <div className={`grow`} />
        <Typography
          variant="small"
          className={`truncate text-onBackgroundLow `}
        >
          Last location:
        </Typography>
        <Typography
          variant="small"
          className={`text-onBackgroundHigh ${
            character ? "" : "shimmer-text-m"
          }`}
        >
          {character?.location.name}
        </Typography>
      </div>
    </div>
  );
}
