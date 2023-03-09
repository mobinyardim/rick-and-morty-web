import { Converter } from "./Converter";
import { UserEntity } from "../persistence/UserEntity";
import { User } from "models/src/User";
import { Document } from "mongoose";

export const userConverter: Converter<UserEntity & Document, unknown, User> = {
  toDomain(user: UserEntity & Document): User {
    return new User(
      user.id,
      user.username,
      user.email,
      user.isVerified,
      user.avatar,
      user.fullName
    );
  },

  toEntity(domain: User): UserEntity & Document {
    throw new Error();
  },
  bodyToEntity(transfer: unknown): UserEntity & Document {
    throw new Error();
  },
};
