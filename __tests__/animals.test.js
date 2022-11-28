const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('animals routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get returns a list of animals', async () => {
    const resp = await request(app).get('/animals');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "common_name": "Thrasher, curve-billed",
          "is_pet": false,
        },
        Object {
          "common_name": "Ringtail, common",
          "is_pet": true,
        },
        Object {
          "common_name": "Toucan, white-throated",
          "is_pet": false,
        },
        Object {
          "common_name": "Goose, andean",
          "is_pet": false,
        },
        Object {
          "common_name": "Ringtail, common",
          "is_pet": true,
        },
        Object {
          "common_name": "Toucan, white-throated",
          "is_pet": false,
        },
        Object {
          "common_name": "Goose, andean",
          "is_pet": false,
        },
        Object {
          "common_name": "Skimmer, four-spotted",
          "is_pet": true,
        },
        Object {
          "common_name": "Australian magpie",
          "is_pet": false,
        },
        Object {
          "common_name": "Brown pelican",
          "is_pet": false,
        },
        Object {
          "common_name": "Moose",
          "is_pet": true,
        },
        Object {
          "common_name": "Common turkey",
          "is_pet": false,
        },
        Object {
          "common_name": "Eastern grey kangaroo",
          "is_pet": true,
        },
        Object {
          "common_name": "White spoonbill",
          "is_pet": true,
        },
        Object {
          "common_name": "Cardinal, red-capped",
          "is_pet": true,
        },
        Object {
          "common_name": "Western spotted skunk",
          "is_pet": true,
        },
        Object {
          "common_name": "Common goldeneye",
          "is_pet": true,
        },
        Object {
          "common_name": "Little blue penguin",
          "is_pet": true,
        },
      ]
    `);
  });

  it('get/:id returns details of a single animal', async () => {
    const resp = await request(app).get('/animals/1');
    const expected = {
      id: expect.any(Number),
      common_name: 'Thrasher, curve-billed',
      scientific_name: 'Toxostoma curvirostre',
      is_pet: false,
    };
    expect(resp.body).toEqual(expected);
  });

  it('#POST /animals creates a new animal', async () => {
    const newAnimal = {
      common_name: 'Raffy the Giraffe',
      scientific_name: 'Raffimus, Gaffimus',
      is_pet: true,
    };
    const resp = await request(app).post('/animals').send(newAnimal);
    expect(resp.body).toEqual({
      id: expect.any(Number),
      ...newAnimal,
    });
  });

  it('#PUT /animals/:id should update an existing animal', async () => {
    const resp = await request(app).put('/animals/1').send({ is_pet: true });
    expect(resp.body.is_pet).toBe(true);
  });

  it('#DELETE /animals/:id should delete a particular animal', async () => {
    const resp = await request(app).delete('/animals/1');
    expect(resp.status).toBe(200);

    const newResp = await request(app).get('/animals/1');
    expect(newResp.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
