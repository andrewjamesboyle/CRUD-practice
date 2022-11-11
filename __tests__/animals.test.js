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
          "id": 1,
          "is_pet": "false",
          "scientific_name": "Toxostoma curvirostre",
        },
        Object {
          "common_name": "Ringtail, common",
          "id": 2,
          "is_pet": "true",
          "scientific_name": "Pseudocheirus peregrinus",
        },
        Object {
          "common_name": "Toucan, white-throated",
          "id": 3,
          "is_pet": "false",
          "scientific_name": "Ramphastos tucanus",
        },
        Object {
          "common_name": "Goose, andean",
          "id": 4,
          "is_pet": "false",
          "scientific_name": "Chloephaga melanoptera",
        },
        Object {
          "common_name": "Skimmer, four-spotted",
          "id": 5,
          "is_pet": "true",
          "scientific_name": "Libellula quadrimaculata",
        },
        Object {
          "common_name": "Australian magpie",
          "id": 6,
          "is_pet": "false",
          "scientific_name": "Gymnorhina tibicen",
        },
        Object {
          "common_name": "Brown pelican",
          "id": 7,
          "is_pet": "false",
          "scientific_name": "Pelecanus occidentalis",
        },
        Object {
          "common_name": "Moose",
          "id": 8,
          "is_pet": "true",
          "scientific_name": "Alces alces",
        },
        Object {
          "common_name": "Common turkey",
          "id": 9,
          "is_pet": "false",
          "scientific_name": "Meleagris gallopavo",
        },
        Object {
          "common_name": "Eastern grey kangaroo",
          "id": 10,
          "is_pet": "true",
          "scientific_name": "Macropus giganteus",
        },
        Object {
          "common_name": "White spoonbill",
          "id": 11,
          "is_pet": "true",
          "scientific_name": "Platalea leucordia",
        },
        Object {
          "common_name": "Cardinal, red-capped",
          "id": 12,
          "is_pet": "true",
          "scientific_name": "Paroaria gularis",
        },
        Object {
          "common_name": "Western spotted skunk",
          "id": 13,
          "is_pet": "true",
          "scientific_name": "Spilogale gracilis",
        },
        Object {
          "common_name": "Common goldeneye",
          "id": 14,
          "is_pet": "true",
          "scientific_name": "Bucephala clangula",
        },
        Object {
          "common_name": "Little blue penguin",
          "id": 15,
          "is_pet": "true",
          "scientific_name": "Eudyptula minor",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
