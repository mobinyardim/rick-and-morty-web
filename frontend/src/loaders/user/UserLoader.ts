import { deferredLoader } from "../ReactRouterUtils";
import { sources } from "../../remoteSources/common/Sources";

export const userLoader = deferredLoader((args) => ({
  metrics: sources.userSource.getUser(),
}));
