import { createServer, Response } from 'miragejs';
import factories from './factories';
import models from './models';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

export async function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    factories,
    models,

    routes() {
      this.namespace = 'api';

      this.post('sign-up', async (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = this.schema.findBy('user', { email: attrs.email });

        if (user)
          return new Response(501, {}, { errors: ['Email already used'] });

        const newUser = this.schema.create('user', {
          email: attrs.email,
          password: await bcrypt.hash(attrs.password, 5),
        });

        const token = await new SignJWT({
          jti: newUser.email,
        })
          .setProtectedHeader({ alg: 'HS256' })
          .sign(new Uint8Array([0, 1, 2]));

        return new Response(
          200,
          {},
          { id: newUser.id, email: newUser.email, token }
        );
      });

      this.post('sign-in', async (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = this.schema.findBy('user', { email: attrs.email });

        if (
          !user ||
          (user.password &&
            !(await bcrypt.compare(attrs.password, user.password)))
        ) {
          return new Response(501, {}, { error: 'Wrong credentials' });
        }

        const token = await new SignJWT({
          jti: user.email,
        })
          .setProtectedHeader({ alg: 'HS256' })
          .sign(new Uint8Array([0, 1, 2]));

        return new Response(200, {}, { id: user.id, email: user.email, token });
      });

      this.get('active-sessions', () => {
        return this.schema.all('session');
      });
    },

    seeds(server) {
      server.createList('session', 20);
    },
  });
}
