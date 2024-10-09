import { Model } from 'miragejs';
import { Session, User } from './utils/types';

const models = {
  session: Model.extend<Partial<Session>>({}),
  user: Model.extend<Partial<User>>({}),
};

export default models;
