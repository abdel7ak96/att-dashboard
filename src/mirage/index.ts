import { createServer, Response } from 'miragejs';
import factories from './factories';
import models from './models';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { subtle } from 'crypto';

async function generateKey() {
  const key = await subtle.generateKey(
    {
      name: 'HMAC',
      hash: { name: 'SHA-256' },
    },
    true, // whether the key is extractable
    ['sign', 'verify'] // key usages
  );

  return key;
}

export async function makeServer({ environment = 'test' }) {
  const secretKey = await generateKey();

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
          .sign(secretKey);

        return new Response(200, { token });
      });

      this.post('sign-in', () => {
        /**
         * TODO: Implement
         * search for existing user with email on the data layer
         * hash password and compare it to the hash stored
         * if it matches generate a JWT and send it back
         */
        return 0;
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
