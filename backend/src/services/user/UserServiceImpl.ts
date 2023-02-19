import { Fail, Result, Success } from "models/src/Result";
import { User } from "models/src/User";
import { UserService } from "./UserService";
import UserDao from "../../persistence/UserEntity";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import bcrypt from "bcrypt";

export class UserServiceImpl extends UserService {
  getUser(userId: string): Promise<Result<User>> {
    throw Error();
  }

  login(): Promise<Result<User>> {
    throw Error();
  }

  async signUp(signUpBody: SignUpBody): Promise<Result<User>> {
    const { username, password, email } = signUpBody;

    if (await UserDao.findOne({ username: username }).exec()) {
      return new Fail("This username is taken before!", 400, "BAD_REQUEST");
    }

    if (await UserDao.findOne({ email: email }).exec()) {
      return new Fail("This email is taken before!", 400, "BAD_REQUEST");
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = await UserDao.create({
      username: username,
      email: email,
      password: passwordHashed,
    });

    return new Success("Successful", newUser);
  }
}
