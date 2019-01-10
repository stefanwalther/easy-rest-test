const logger = require('winster').instance();

const HealthCheckController = require('./../health-check/health-check.controller');
const GenericDatasetController = require('./../generic-dataset/generic-dataset.controller');

class GenericController {

  static async get(req, res) {
    logger.trace('[GenericController.get.name]', req.params.name);

    let resource = req.params.name;

    switch (resource) {
      case 'health-check':
        return HealthCheckController.get(req, res);
      case 'api-docs': // Reserved word
      case 'file': // Reserved word
        break;
      default:
        return GenericDatasetController.get(req, res);
    }
  }

  static async getFile(req, res) {
    logger.trace('[GenericController.getFile.name]', req.params.name);
    return GenericDatasetController.getFile(req, res);
  }

}

module.exports = GenericController;
