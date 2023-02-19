class User {
  username: string;

  email: string;

  password: string;

  isVerified: string;

  avatar?: string;

  constructor(
    username: string,
    email: string,
    password: string,
    isVerified: string,
    avatar: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isVerified = isVerified;
    this.avatar = avatar;
  }
}
