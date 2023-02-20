import { User } from "models/src/User";

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}
