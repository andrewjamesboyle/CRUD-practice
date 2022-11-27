const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('get returns a list of books', async () => {
    const resp = await request(app).get('/books');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "isbn_number": "505522812-1",
          "quote": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
          "title": "Regrant",
        },
        Object {
          "isbn_number": "836980782-8",
          "quote": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
          "title": "Zamit",
        },
        Object {
          "isbn_number": "909675990-7",
          "quote": "Donec quis orci eget orci vehicula condimentum.",
          "title": "Bigtax",
        },
        Object {
          "isbn_number": "928846466-2",
          "quote": "Pellentesque viverra pede ac diam.",
          "title": "Vagram",
        },
        Object {
          "isbn_number": "451047688-4",
          "quote": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
          "title": "Subin",
        },
        Object {
          "isbn_number": "681786985-4",
          "quote": "Nulla tempus.",
          "title": "It",
        },
        Object {
          "isbn_number": "920290658-0",
          "quote": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Mauris viverra diam vitae quam.",
          "title": "Regrant",
        },
        Object {
          "isbn_number": "590482105-0",
          "quote": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
          "title": "Transcof",
        },
        Object {
          "isbn_number": "601690250-0",
          "quote": "Phasellus in felis.",
          "title": "Zoolab",
        },
        Object {
          "isbn_number": "155900774-5",
          "quote": "Maecenas pulvinar lobortis est.",
          "title": "Sub-Ex",
        },
        Object {
          "isbn_number": "161951628-4",
          "quote": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
          "title": "Fix San",
        },
        Object {
          "isbn_number": "702218725-8",
          "quote": "Duis ac nibh.",
          "title": "Regrant",
        },
        Object {
          "isbn_number": "648398352-2",
          "quote": "Duis bibendum.",
          "title": "Keylex",
        },
        Object {
          "isbn_number": "730954847-7",
          "quote": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Mauris viverra diam vitae quam.",
          "title": "Flexidy",
        },
        Object {
          "isbn_number": "165278636-8",
          "quote": "Nulla suscipit ligula in lacus.",
          "title": "Rank",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
