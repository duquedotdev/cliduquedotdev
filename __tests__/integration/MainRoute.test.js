import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Main route', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('It should to be 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
