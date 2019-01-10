const logger = require('winster').instance();
const path = require('path');
const parse = require('csv-parse/lib/sync');
const _ = require('lodash');

const send = require('koa-send');

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

  static async get(ctx) {
    const datasets = _.split(_.trim(ctx.params.name), ',');
    logger.trace('[GenericDatasetController.get]', datasets);

    let result = {
      data: {}
    };

    await Promise.all(datasets.map(async item => {
      result.data[item] = await GenericDatasetController._getDataSet(item);
    }));

    ctx.response.status = 200;
    ctx.response.body = result;

  }

  static async getFile(ctx) {
    const dataset = ctx.params.name;
    logger.trace('[GenericDatasetController.getFile]', dataset);

    const filePath = `${dataset}.csv`;
    await send(ctx, filePath, {root: path.resolve(__dirname, './../../../data')});
  }

}

module.exports = GenericDatasetController;
