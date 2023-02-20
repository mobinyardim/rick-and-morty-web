import { LoginBody } from "models/src/bodyModels/LoginBody";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { Result } from "models/src/Result";
import { User } from "models/src/User";

export abstract class UserRemoteSource {
  abstract login(loginBody: LoginBody): Promise<Result<User>>;

  abstract signUp(signUpBody: SignUpBody): Promise<Result<User>>;

  abstract getUser(userId?: string): Promise<Result<User>>;
}
