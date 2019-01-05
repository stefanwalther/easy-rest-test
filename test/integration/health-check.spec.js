const superTest = require('supertest');
const HttpStatus = require('http-status-codes');
const pkg = require('read-pkg-up').sync().pkg;

const AppServer = require('./../../src/app-server');
const config = require('./../config/server-config');

describe('[integration] => health-check', () => {
  let server;
  let appServer;

  beforeEach(async () => {
    appServer = new AppServer(config);
    await appServer.start();
    server = superTest(appServer.server);
  });

  afterEach(async () => {
    await appServer.stop();
  });

  it('returns OK and a timestamp', () => {
    return server
      .get('/health-check')
      .expect(HttpStatus.OK)
      .then(result => {
        expect(result).to.exist;
        expect(result).to.have.property('body');
        expect(result.body).to.have.a.property('ts').to.exist;
        expect(result.body).to.have.a.property('name').to.be.equal(pkg.name);
        expect(result.body).to.have.a.property('version').to.be.equal(pkg.version);
        expect(result.body).to.have.a.property('repository').to.exist;
      });
  });
});
