import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import { User } from "models/src/User";
import { Result } from "../../../../models/src/Result";

export abstract class UserService {
  abstract signUp(signUpBody: SignUpBody): Promise<Result<User>>;

  abstract login(loginBody: LoginBody): Promise<Result<User>>;

  abstract getUser(userId: string): Promise<Result<User>>;
}
