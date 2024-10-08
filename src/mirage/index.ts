import { createServer } from 'miragejs';
import factories from './factories';
import models from './models';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    factories,
    models,

    routes() {
      this.namespace = 'api';

      this.get('active-sessions', () => {
        return this.schema.all('session');
      });
    },

    seeds(server) {
      server.createList('session', 20);
    },
  });
}
