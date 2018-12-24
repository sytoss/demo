const request = require('supertest');

const app  = require('../../api/server');

describe('## Test API Tests', () => {

  afterEach(() => {
    app.server.close();
  });

  test('### POST /post', () => {
    return request(app)
      .post('/post')
      .send({
        message: 'Hello'
      })
      .expect('Content-Type', /application\/json; charset=utf-8/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatch(
          /Hello/
        );
        app.server.close();
      });
  });

});