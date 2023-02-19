export class User {
  username: string;

  email: string;

  isVerified: boolean;

  avatar?: string;

  constructor(
    username: string,
    email: string,
    isVerified: boolean,
    avatar?: string
  ) {
    this.username = username;
    this.email = email;
    this.isVerified = isVerified;
    this.avatar = avatar;
  }
}
