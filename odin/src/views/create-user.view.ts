import User from '@models/User';

class UsersView {
  id: string;

  email: string;

  username: string;

  password: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password_hash;
  }
}

export default UsersView;
