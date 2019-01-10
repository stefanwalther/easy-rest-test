const superTest = require('supertest');
const HttpStatus = require('http-status-codes');

const testConfig = require('./../config/server-config');
const AppServer = require('./../../src/app-server');

const DATASETS = [
  'categories',
  'employees',
  'offices',
  'products',
  'sales-data',
  'suppliers'
];

describe('[integration] => generic dataset', () => {
  let server;
  let appServer;

  beforeEach(async () => {
    if (appServer) {
      await appServer.stop();
    }
    appServer = new AppServer(testConfig);
    await appServer.start();
    server = superTest(appServer.server);
  });

  afterEach(async () => {
    await appServer.stop();
  });

  describe('`GET /:name`', () => {
    DATASETS.forEach(item => {
      it(`should return an array for '${item}'`, async () => {
        await server
          .get(`/${item}`)
          .expect(HttpStatus.OK)
          .then(result => {
            console.log(result.body);
            expect(result.body).to.have.a.property('data');
            expect(result.body.data).to.exist.to.have.a.property(item);
          });
      });
    });

    it('should delay the result using query option `delay`', async () => {
      let tsStart = new Date();
      await server
        .get(`/${DATASETS[0]}`)
        .query({delay: 1000})
        .expect(HttpStatus.OK)
        .then(() => {
          let tsEnd = new Date();
          expect(tsEnd - tsStart).to.be.above(1000);
        });
    }).timeout(1500);
  });

  describe('`GET /file/:name`', () => {
    DATASETS.forEach(item => {
      it(`downloads the file '${item}.csv'`, async () => {
        await server
          .get(`/file/${item}`)
          .expect(HttpStatus.OK)
          .then(result => {
            console.log(result.headers);
          });
      });
    });
  });
});
