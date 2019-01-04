const parse = require('csv-parse/lib/sync');
const path = require('path');
const utils = require('./../../src/utils');

describe('[unit] => csv-parse', () => {
  it('parses the sample-dataset `offices` properly', async () => {
    const filePath = path.resolve(__dirname, './../fixtures/sample-data/offices.csv');
    let fileContent = await utils.readFile(filePath);
    const parseOptions = {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true
    };

    let records = parse(fileContent, parseOptions);

    expect(records).to.exist.to.be.an('array').of.length(5);
  });

  it('parses the sample-dataset `sales-data` properly', async () => {
    const filePath = path.resolve(__dirname, './../fixtures/sample-data/sales-data.csv');
    let fileContent = await utils.readFile(filePath);
    const parseOptions = {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true
    };

    let records = parse(fileContent, parseOptions);

    expect(records).to.exist.to.be.an('array').of.length(2036);
  });
});
