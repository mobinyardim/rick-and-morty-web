import { AxiosError } from "axios";
import { Fail } from "models/src/Result";

export function convertAxiosFailToFailResult(reason: any): Fail {
  if (reason instanceof AxiosError) {
    try {
      return reason.response?.data as Fail;
    } catch (e: any) {
      return new Fail(reason.message, parseInt(reason.code ?? "0"), "UNKNOWN");
    }
  } else {
    return new Fail(reason.message, 0, "UNKNOWN");
  }
}
