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
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "education": "Centro Universitario de Occidente",
          "position": "Programmer Analyst II",
          "skills": "Twisted",
        },
        Object {
          "education": "Linton University College",
          "position": "Coordinator",
          "skills": "EBSD",
        },
        Object {
          "education": "Quinnipiac College",
          "position": "Senior Quality Engineer",
          "skills": "Visual Basic",
        },
        Object {
          "education": "Juntendo University",
          "position": "Marketing Assistant",
          "skills": "Key Opinion Leaders",
        },
        Object {
          "education": "University Campus Suffolk",
          "position": "Computer Systems Analyst IV",
          "skills": "OS/390",
        },
        Object {
          "education": "Universidade de Marília",
          "position": "Technical Writer",
          "skills": "BPMN",
        },
        Object {
          "education": "Ludwik Solski State Academy of Theatre in Cracow",
          "position": "Civil Engineer",
          "skills": "DSDM",
        },
        Object {
          "education": "Claremont Lincoln University",
          "position": "Executive Secretary",
          "skills": "Sungard GMI",
        },
        Object {
          "education": "State University of New York College at Oneonta",
          "position": "Food Chemist",
          "skills": "Equity Trading",
        },
        Object {
          "education": "Universidad Panamericana",
          "position": "Quality Control Specialist",
          "skills": "MCITP",
        },
        Object {
          "education": "Universidade Federal Rural do Semi-Árido",
          "position": "Human Resources Assistant I",
          "skills": "KDB+",
        },
        Object {
          "education": "Universitas Tanjungpura",
          "position": "Senior Developer",
          "skills": "VNA",
        },
        Object {
          "education": "Zhejiang Forestry University",
          "position": "Tax Accountant",
          "skills": "IBM Content Manager",
        },
        Object {
          "education": "Gombe State University",
          "position": "Recruiting Manager",
          "skills": "Hydrogeology",
        },
        Object {
          "education": "Durham College",
          "position": "Marketing Assistant",
          "skills": "Eclipse CDT",
        },
      ]
    `);
  });

  it('get/:id returns details of a single employee', async () => {
    const resp = await request(app).get('/employees/1');
    const expected = {
      id: expect.any(Number),
      position: 'Programmer Analyst II',
      skills: 'Twisted',
      education: 'Centro Universitario de Occidente',
    };
    expect(resp.body).toEqual(expected);
  });

  it('#POST /employees creates a new employee', async () => {
    const newEmployee = {
      position: 'Head Chef',
      skills: 'Chef',
      education: 'Culinary Institute of America',
    };
    const resp = await request(app).post('/employees').send(newEmployee);
    expect(resp.body).toEqual({
      id: expect.any(Number),
      ...newEmployee,
    });
  });

  it('#PUT /employees/:id should update an existing employee', async () => {
    const resp = await request(app).put('/employees/1').send({ position: 'Chef' });
    expect(resp.body.position).toBe('Chef');
  });

  afterAll(() => {
    pool.end();
  });
});
