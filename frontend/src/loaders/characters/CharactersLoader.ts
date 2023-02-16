import { deferredLoader } from "../../utils/ReactRouterUtils";
import { sources } from "../../remoteSources/common/Sources";

export const charactersLoader = deferredLoader((args) => ({
  metrics: sources.charactersSource.getCharacters(),
}));
