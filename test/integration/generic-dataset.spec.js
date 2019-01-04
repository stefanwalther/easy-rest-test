const superTest = require('supertest');
const HttpStatus = require('http-status-codes');

const config = require('./../../src/config/server-config');
const AppServer = require('./../../src/app-server');

describe('[integration] => generic dataset', () => {
  let server;
  let appServer;

  beforeEach(async () => {
    if (appServer) {
      await appServer.stop();
    }
    appServer = new AppServer(config);
    await appServer.start();
    server = superTest(appServer.server);
  });

  afterEach(async () => {
    await appServer.stop();
  });

  it('returns an array for `offices`', async () => {
    await server
      .get('/offices')
      .expect(HttpStatus.OK)
      .then(result => {
        console.log(result.body);
        expect(result.body).to.exist.to.be.an('array');
      });
  });
});
