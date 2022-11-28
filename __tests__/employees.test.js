const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('employees routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get returns a list of employees', async () => {
    const resp = await request(app).get('/employees');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot();
  });

  afterAll(() => {
    pool.end();
  });
});
