import supertest from 'supertest';
import config from '../../../src/config';

const api = supertest(`http://localhost:${config.server.port}`);

describe('ROUTES', () => {
  describe('Token', () => {
    test('should create token', async () => {
      const email =
        Math.random()
          .toString(36)
          .substring(7) + '@example.com';
      const res = await api
        .post('/api/token')
        .send({ email })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.success).toBeTruthy();
      expect(res.body.item.quota).toBe(config.dailyQuota);
      expect(res.body.item.email).toBe(email);
    });
  });
});
