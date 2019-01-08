const expressResult = require('express-result');
const logger = require('winster').instance();
const path = require('path');
const parse = require('csv-parse/lib/sync');

const utils = require('./../../utils');

class GenericDatasetController {

  static async get(req, res) {
    const dataset = req.params.name;
    logger.trace('[GenericDatasetController.get]', dataset);

    const filePath = path.resolve(__dirname, `./../../../data/${dataset}.csv`);
    let fileContent = await utils.readFile(filePath);
    const parseOptions = {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true
    };

    let records = parse(fileContent, parseOptions);
    return expressResult.ok(res, {data: records});
  }

  static async getFile(req, res) {
    const dataset = req.params.name;
    logger.trace('[GenericDatasetController.getFile]', dataset);

    const filePath = path.resolve(__dirname, `./../../../data/${dataset}.csv`);
    const fileName = path.basename(filePath);
    return res.download(filePath, fileName);

  }

}

module.exports = GenericDatasetController;
