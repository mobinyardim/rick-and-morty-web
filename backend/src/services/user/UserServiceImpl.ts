import { Fail, Result, Success } from "models/src/Result";
import { User } from "models/src/User";
import { UserService } from "./UserService";
import UserDao from "../../persistence/UserEntity";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import bcrypt from "bcrypt";
import { userConverter } from "../../converters/UserConverter";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import mongoose from "mongoose";

export class UserServiceImpl extends UserService {
  async getUser(userId: string): Promise<Result<User>> {
    if (!mongoose.isValidObjectId(userId)) {
      return new Fail("Wrong credential!", 400, "BAD_REQUEST");
    }
    const user = await UserDao.findById(userId).exec();
    if (user === null) {
      return new Fail("Wrong credential!", 401, "NOT_AUTHORIZED");
    }
    return new Success("Successful", userConverter.toDomain(user));
  }

  async login(loginBody: LoginBody): Promise<Result<User>> {
    const { username, password } = loginBody;

    const user = await UserDao.findOne({ username: username }).exec();
    if (user === null) {
      return new Fail("Wrong credential!", 401, "NOT_AUTHORIZED");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Fail("Wrong credential!", 401, "NOT_AUTHORIZED");
    }

    return new Success("Successful", userConverter.toDomain(user));
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

    return new Success("Successful", userConverter.toDomain(newUser));
  }
}
