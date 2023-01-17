import {Converter} from "./Converter";
import {Origin} from "../models/Location";
import {OriginEntity} from "../persistence/OriginEntity";

export const originConverters: Converter<OriginEntity, Origin> = {

    toDomain(origin: OriginEntity): Origin {
        return new Origin(
            origin.name,
            origin.url
        )
    },

    toEntity(domain: Origin): OriginEntity {
        throw new Error();
    }
}