import { Converter } from "./Converter";
import { Origin } from "../../../models/src/Origin";
import { OriginEntity } from "../persistence/OriginEntity";
import { LocationEntity } from "../persistence/LocationEntity";

export const originConverters: Converter<OriginEntity, unknown, Origin> = {
  toDomain(origin: OriginEntity): Origin {
    return new Origin(origin.name, origin.url);
  },

  toEntity(domain: Origin): OriginEntity {
    throw new Error();
  },
  bodyToEntity(transfer: unknown): LocationEntity {
    throw new Error();
  },
};
