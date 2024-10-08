import { Model } from 'miragejs';
import { Session } from './utils/types';

const models = {
  session: Model.extend<Partial<Session>>({}),
};

export default models;
