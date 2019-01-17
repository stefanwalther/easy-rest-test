const logger = require('winster').instance();
const path = require('path');
const parse = require('csv-parse/lib/sync');
const _ = require('lodash');

const send = require('koa-send');

const utils = require('./../../utils');

class GenericDatasetController {

  static async _skipEmptyProps(input) {
    input.forEach(item => {
      let propNames = Object.getOwnPropertyNames(item);
      for (let i = 0; i < propNames.length; i++) {
        let propName = propNames[i];
        if (item[propName] === null || item[propName] === undefined || item[propName].length === 0) {
          delete item[propName];
        }
      }
    });
    return input;
  }

  static async _getDataSet(dataset) {
    const filePath = path.resolve(__dirname, `./../../../data/${dataset}.csv`);
    let fileContent = await utils.readFile(filePath);
    const parseOptions = {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true,
      ltrim: true,
      rtrim: true,
      trim: true
    };
    return GenericDatasetController._skipEmptyProps(parse(fileContent, parseOptions));
  }

  static _getOptions(ctx) {
    let options = {
      delay: 0
    };

    logger.trace('ctx.query', ctx.query);
    if (ctx && ctx.query && ctx.query.delay) {
      if (isNaN(ctx.query.delay)) {
        throw new Error('Querystring `delay` must be a number.');
      }
      options.delay = ctx.query.delay;
    }

    return options;
  }

  static async get(ctx) {
    const datasets = _.split(_.trim(ctx.params.name), ',');
    logger.trace('[GenericDatasetController.get]', datasets);

    const options = GenericDatasetController._getOptions(ctx);
    logger.trace('[GenericDatasetController.get > options]', options);

    if (options.delay > 0) {
      logger.trace(`[GenericDatasetController.get] > Delay the response for ${options.delay} ms`);
      await utils.sleep(options.delay);
    }

    let result = {
      data: {}
    };

    await Promise.all(datasets.map(async item => {
      result.data[item] = await GenericDatasetController._getDataSet(item);
    }));

    logger.trace('[GenericDatasetController.get] > return the result');
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
