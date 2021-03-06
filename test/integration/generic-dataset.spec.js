const superTest = require('supertest');
const HttpStatus = require('http-status-codes');

const testConfig = require('./../config/server-config');
const AppServer = require('./../../src/app-server');

const DATASETS = [
  {
    name: 'categories',
    records: 4
  },
  {
    name: 'employees',
    records: 8
  },
  {
    name: 'offices',
    records: 2
  },
  {
    name: 'products',
    records: 4
  },
  {
    name: 'sales-data',
    records: 24
  },
  {
    name: 'suppliers',
    records: 4
  }
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
      it(`should return an array for '${item.name}'`, async () => {
        await server
          .get(`/${item.name}`)
          .expect(HttpStatus.OK)
          .then(result => {
            expect(result.body).to.have.a.property('data');
            expect(result.body.data).to.exist.to.have.a.property(item.name);
            expect(Object.keys(result.body.data[item.name][0])).to.be.of.length(item.records);
          });
      });
    });

    xit('removes empty object in case of trailing delimiters', async () => {
      await server
        .get(`/${item.name}`)
        .expect(HttpStatus.OK)
        .then(result => {
          expect(result.body).to.have.a.property('data');
          expect(result.body.data).to.exist.to.have.a.property(item.name);
          expect(Object.keys(result.body.data[item.name][0])).to.be.of.length(item.records);
        });
    });

    it('should delay the result using query option `delay`', async () => {
      let tsStart = new Date();
      await server
        .get(`/${DATASETS[0].name}`)
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
      it(`downloads the file '${item.name}.csv'`, async () => {
        await server
          .get(`/file/${item.name}`)
          .expect(HttpStatus.OK);
        // .then(result => {
        //  console.log(result.headers);
        // });
      });
    });
  });
});
