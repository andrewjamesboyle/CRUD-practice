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
    expect(resp.body).toEqual([{
      'make': 'Chevrolet',
      'model': 'Avalanche',
      'year': 2007,
    },
    {
      'make': 'Chrysler',
      'model': '300',
      'year': 2010,
    },
    {
      'make': 'Ford',
      'model': 'Focus',
      'year': 2001,
    },
    {
      'make': 'Kia',
      'model': 'Sorento',
      'year': 2009,
    },
    {
      'make': 'Infiniti',
      'model': 'G35',
      'year': 2008,
    },
    {
      'make': 'Saturn',
      'model': 'VUE',
      'year': 2008,
    },
    {
      'make': 'Jeep',
      'model': 'Wrangler',
      'year': 2001,
    },
    {
      'make': 'Mitsubishi',
      'model': 'Pajero',
      'year': 1994,
    },
    {
      'make': 'Cadillac',
      'model': 'DeVille',
      'year': 1998,
    },
    {
      'make': 'Chevrolet',
      'model': '3500',
      'year': 2000,
    },
    {
      'make': 'Nissan',
      'model': 'Xterra',
      'year': 2004,
    },
    {
      'make': 'Mitsubishi',
      'model': 'Expo',
      'year': 1993,
    },
    {
      'make': 'Dodge',
      'model': 'Caliber',
      'year': 2009,
    },
    {
      'make': 'Honda',
      'model': 'Insight',
      'year': 2011,
    },
    {
      'make': 'Porsche',
      'model': '944',
      'year': 1988,
    },
    ]
    );
  });

  it('get/:id returns details of a single car', async () => {
    const resp = await request(app).get('/cars/1');
    const expected = {
      id: expect.any(Number),
      model: 'Avalanche',
      make: 'Chevrolet',
      year: 2007,
    };
    expect(resp.body).toEqual(expected);
  });

  it('#POST /cars creates a new car', async () => {
    const newCar = {
      model: 'WRX',
      make: 'Subaru',
      year: 2022,
    };
    const resp = await request(app).post('/cars').send(newCar);
    expect(resp.body).toEqual({
      id: expect.any(Number),
      ...newCar,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
