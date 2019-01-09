const expressResult = require('express-result');
const logger = require('winster').instance();
const path = require('path');
const parse = require('csv-parse/lib/sync');
const _ = require('lodash');

const utils = require('./../../utils');

class GenericDatasetController {

  static async _getDataSet(dataset) {
    const filePath = path.resolve(__dirname, `./../../../data/${dataset}.csv`);
    let fileContent = await utils.readFile(filePath);
    const parseOptions = {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true
    };
    return parse(fileContent, parseOptions);
  }

  static async get(req, res) {
    const datasets = _.split(_.trim(req.params.name), ',');
    logger.trace('[GenericDatasetController.get]', datasets);

    let records = await Promise.all(datasets.map(async item => {
      logger.trace('item', item);
      return {[item]: await GenericDatasetController._getDataSet(item)};
    }));

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
