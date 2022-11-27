const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cars routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get returns a list of cars', async () => {
    const resp = await request(app).get('/cars');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "make": "Chevrolet",
          "model": "Avalanche",
          "year": 2007,
        },
        Object {
          "make": "Chrysler",
          "model": "300",
          "year": 2010,
        },
        Object {
          "make": "Ford",
          "model": "Focus",
          "year": 2001,
        },
        Object {
          "make": "Kia",
          "model": "Sorento",
          "year": 2009,
        },
        Object {
          "make": "Infiniti",
          "model": "G35",
          "year": 2008,
        },
        Object {
          "make": "Saturn",
          "model": "VUE",
          "year": 2008,
        },
        Object {
          "make": "Jeep",
          "model": "Wrangler",
          "year": 2001,
        },
        Object {
          "make": "Mitsubishi",
          "model": "Pajero",
          "year": 1994,
        },
        Object {
          "make": "Cadillac",
          "model": "DeVille",
          "year": 1998,
        },
        Object {
          "make": "Chevrolet",
          "model": "3500",
          "year": 2000,
        },
        Object {
          "make": "Nissan",
          "model": "Xterra",
          "year": 2004,
        },
        Object {
          "make": "Mitsubishi",
          "model": "Expo",
          "year": 1993,
        },
        Object {
          "make": "Dodge",
          "model": "Caliber",
          "year": 2009,
        },
        Object {
          "make": "Honda",
          "model": "Insight",
          "year": 2011,
        },
        Object {
          "make": "Porsche",
          "model": "944",
          "year": 1988,
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
