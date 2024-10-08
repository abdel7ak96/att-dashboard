import { Factory } from 'miragejs';
import { Session } from './utils/types';
import { faker } from '@faker-js/faker';

const factories = {
  session: Factory.extend<Partial<Session>>({
    worker() {
      return faker.person.fullName();
    },
    recordedBy() {
      return faker.person.fullName();
    },
    startedAt() {
      return faker.date.recent().toString();
    },
    duration() {
      return `${Math.floor(Math.random() * 10) + 1} hours`;
    },
    completedAt() {
      return faker.date.soon().toString();
    },
  }),
};

export default factories;
