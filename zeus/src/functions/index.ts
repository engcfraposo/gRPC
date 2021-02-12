import grpc from 'grpc';
import { getRepository, Repository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

import UsersRepository from '../repositories/users.repository';
import UsersView from '../views/create-user.view';
import SessionsRepository from '../repositories/sessions.repository';
import Session from '../models/Session';

export default {
  async getUserById(call: any, callback: Function): Promise<void> {
    const { id } = call.request;

    const repository = getRepository(User);

    const usersRepository = new UsersRepository(repository as Repository<User>);

    const userExists = await usersRepository.getById(id);

    if (!userExists) {
      return callback(null, { error: 'This login/password is incorrect' });
    }

    const userView = new UsersView(userExists);

    return callback(null, { user: { ...userView, password: undefined } });
  },
  async createUser(call: any, callback: Function): Promise<void> {
    const { email, username, password } = call.request.user;

    const repository = getRepository(User);

    const usersRepository = new UsersRepository(repository as Repository<User>);

    const userExists = await usersRepository.getByLogin({ username });

    if (userExists) {
      return callback(null, { error: 'This login is already assigned a user' });
    }

    const password_hash = await hash(password, 8);

    const user = await usersRepository.create({
      email,
      username,
      password_hash,
    });

    const userView = new UsersView(user);

    return callback(null, { user: { ...userView, password: undefined } });
  },

  async loginUser(call: any, callback: Function): Promise<void> {
    const { username, password } = call.request.user;

    const sessionsGetRepository = getRepository(Session);

    const usersGetRepository = getRepository(User);

    const usersRepository = new UsersRepository(
      usersGetRepository as Repository<User>,
    );

    const sessionsRepository = new SessionsRepository(
      sessionsGetRepository as Repository<Session>,
    );

    const userExists = await usersRepository.getByLogin({ username });

    if (!userExists) {
      return callback(null, { error: 'This login/password is incorrect' });
    }

    const passwordMatched = await compare(
      password as string,
      userExists.password_hash,
    );

    if (!passwordMatched) {
      return callback(null, { error: 'This login/password is incorrect' });
    }

    await sessionsRepository.create({
      user: userExists,
    });

    const token = sign(
      {
        data: 'Attomic',
      },
      'Attomic',
      {
        subject: userExists.id,
        expiresIn: '2d',
      },
    );
    return callback(null, { token });
  },
};
