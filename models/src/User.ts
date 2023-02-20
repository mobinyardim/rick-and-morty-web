export class User {
  id: string;
  username: string;

  email: string;

  isVerified: boolean;

  avatar?: string;

  constructor(
    id: string,
    username: string,
    email: string,
    isVerified: boolean,
    avatar?: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.isVerified = isVerified;
    this.avatar = avatar;
  }
}
