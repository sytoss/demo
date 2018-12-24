const request = require('supertest');

const app  = require('../../api/server');

describe('## Test API Tests', () => {

  afterEach(() => {
    app.server.close();
  });

  test('### GET /hello/:slug', () => {
    request(app)
      .get('/hello/World')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => {
        expect(res.text).toMatch(
          /Hello World/
        );
      });
  });

  test('### GET /', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => {
        expect(res.text).toMatch(
          /Hello/
        );
      });
  });

});