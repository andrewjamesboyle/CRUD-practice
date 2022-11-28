const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('drugs routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get returns a list of drugs', async () => {
    const resp = await request(app).get('/drugs');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "company": "Cardinal Health",
          "otc_name": "leader sinus congestion and pain",
          "rx_name": "Acetaminophen, Phenylephrine HCl",
        },
        Object {
          "company": "Vertical Pharmaceuticals, LLC",
          "otc_name": "ConZip",
          "rx_name": "tramadol hydrochloride",
        },
        Object {
          "company": "Rebel Distributors Corp",
          "otc_name": "Ranitidine Hydrochloride",
          "rx_name": "Ranitidine Hydrochloride",
        },
        Object {
          "company": "Sandoz Inc",
          "otc_name": "Carbidopa, Levodopa, and Entacapone",
          "rx_name": "Carbidopa, Levodopa, and Entacapone",
        },
        Object {
          "company": "Major Pharmaceuticals",
          "otc_name": "Clonazepam",
          "rx_name": "Clonazepam",
        },
        Object {
          "company": "Barr Laboratories Inc.",
          "otc_name": "Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate",
          "rx_name": "Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate",
        },
        Object {
          "company": "Medsep Corporation",
          "otc_name": "Nutricel Additive System - AS-3",
          "rx_name": "CP2D/AS-3 Anticoagulant and Additive System",
        },
        Object {
          "company": "REMEDYREPACK INC.",
          "otc_name": "isosorbide mononitrate",
          "rx_name": "isosorbide mononitrate",
        },
        Object {
          "company": "Cardinal Health",
          "otc_name": "Leader Maximum Strength Invisible Acne",
          "rx_name": "Benzoyl Peroxide 10%",
        },
        Object {
          "company": "Rebel Distributors Corp",
          "otc_name": "Prednisone",
          "rx_name": "Prednisone",
        },
        Object {
          "company": "Family Dollar Services Inc",
          "otc_name": "family wellness hemorrhoidal",
          "rx_name": "cocoa butter, phenylephrine hcl",
        },
        Object {
          "company": "DIRECT RX",
          "otc_name": "AZITHROMYCIN",
          "rx_name": "AZITHROMYCIN",
        },
        Object {
          "company": "Nephron Pharmaceuticals Corporation",
          "otc_name": "S2",
          "rx_name": "racepinephrine hydrochloride",
        },
        Object {
          "company": "WALGREEN CO.",
          "otc_name": "Ibuprofen",
          "rx_name": "Ibuprofen",
        },
        Object {
          "company": "Kareway Product, Inc.",
          "otc_name": "Pink Bismuth",
          "rx_name": "Bismuth Subsalicylate",
        },
      ]
    `);
  });

  it('get/:id returns details of a single drug', async () => {
    const resp = await request(app).get('/drugs/1');
    const expected = {
      id: expect.any(Number),
      company: 'Cardinal Health',
      otc_name: 'leader sinus congestion and pain',
      rx_name: 'Acetaminophen, Phenylephrine HCl',
    };
    expect(resp.body).toEqual(expected);
  });

  it('#POST /drugs creates a new drug', async () => {
    const newDrug = {
      company: 'MagicRx',
      otc_name: 'Happy Pills',
      rx_name: 'SSRI',
    };
    const resp = await request(app).post('/drugs').send(newDrug);
    expect(resp.body).toEqual({
      id: expect.any(Number),
      ...newDrug,
    });
  });

  it('#PUT /drugs/:id should update an existing drug', async () => {
    const resp = await request(app).put('/drugs/1').send({ company: 'Pfizer' });
    expect(resp.body.company).toBe('Pfizer');
  });

  it('#DELETE /drugs/:id should delete a particular drug', async () => {
    const resp = await request(app).delete('/drugs/1');
    expect(resp.status).toBe(200);

    const newResp = await request(app).get('/drugs/1');
    expect(newResp.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
