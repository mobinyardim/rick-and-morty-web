import {Character} from "models/src/Character";
import {Typography} from "@material-tailwind/react";

export interface CharacterComponentProps {
    className?: string,
    character: Character,

}

export function CharacterComponent(
    {className, character}: CharacterComponentProps
) {
    let statusClassName = ""
    switch (character.status) {
        case "Alive": {
            statusClassName = "bg-error"
            break;
        }
        case "Dead": {
            statusClassName = "bg-success"
            break;
        }
        case "Unknown": {
            statusClassName = "bg-onBackgroundMedium"
            break;
        }
    }
    return (
        <div className={`flex lg-max:flex-col lg:flex-row bg-surface w-full rounded-2xl overflow-clip ${className}`}>

            <img src={character.image} className={`lg:w-48 lg:h-48  lg-max:aspect-square lg-max:grow`}/>
            <div className={`flex flex-col p-4`}>
                <Typography variant="h4" className={`text-onBackgroundHigh`}>{character.name}</Typography>
                <div className={`flex flex-row gap-1 items-center`}>
                    <div
                        className={`w-3 h-3 aspect-square shrink-0 grow-0 ${statusClassName} rounded-full items-center`}/>
                    <Typography variant="paragraph"
                                className={`text-onBackgroundHigh`}>{character.status}&ensp;-&ensp;{character.species}</Typography>
                </div>
                <div className={`grow`}/>
                <Typography variant="paragraph" className={`text-onBackgroundLow`}>Last known location:</Typography>
                <Typography variant="paragraph"
                            className={`text-onBackgroundHigh`}>{character.location.name}</Typography>

            </div>
        </div>
    );
}