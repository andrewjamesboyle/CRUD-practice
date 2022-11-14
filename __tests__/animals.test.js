const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('animals routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get', async () => {
    const resp = await request(app).get('/animals');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "common_name": "Thrasher, curve-billed",
          "is_pet": "false",
        },
        Object {
          "common_name": "Ringtail, common",
          "is_pet": "true",
        },
        Object {
          "common_name": "Toucan, white-throated",
          "is_pet": "false",
        },
        Object {
          "common_name": "Goose, andean",
          "is_pet": "false",
        },
        Object {
          "common_name": "Ringtail, common",
          "is_pet": "true",
        },
        Object {
          "common_name": "Toucan, white-throated",
          "is_pet": "false",
        },
        Object {
          "common_name": "Goose, andean",
          "is_pet": "false",
        },
        Object {
          "common_name": "Skimmer, four-spotted",
          "is_pet": "true",
        },
        Object {
          "common_name": "Australian magpie",
          "is_pet": "false",
        },
        Object {
          "common_name": "Brown pelican",
          "is_pet": "false",
        },
        Object {
          "common_name": "Moose",
          "is_pet": "true",
        },
        Object {
          "common_name": "Common turkey",
          "is_pet": "false",
        },
        Object {
          "common_name": "Eastern grey kangaroo",
          "is_pet": "true",
        },
        Object {
          "common_name": "White spoonbill",
          "is_pet": "true",
        },
        Object {
          "common_name": "Cardinal, red-capped",
          "is_pet": "true",
        },
        Object {
          "common_name": "Western spotted skunk",
          "is_pet": "true",
        },
        Object {
          "common_name": "Common goldeneye",
          "is_pet": "true",
        },
        Object {
          "common_name": "Little blue penguin",
          "is_pet": "true",
        },
      ]
    `);
  });

  it('get/:id returns details of a single animal', async () => {
    const resp = await request(app).get('/animals/1');
    const expected = {
      id: 1,
      common_name: 'Thrasher, curve-billed',
      scientific_name: 'Toxostoma curvirostre',
      is_pet: false,
    };
    expect(resp.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
