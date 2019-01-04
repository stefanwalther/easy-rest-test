const logger = require('winster').instance();

const HealthCheckController = require('./../health-check/health-check.controller');
const GenericDatasetController = require('./../generic-dataset/generic-dataset.controller');

class GenericController {

  static get(req, res) {
    logger.trace('[GenericController.name]', req.params.name);

    let resource = req.params.name;

    switch (resource) {
      case 'health-check':
        return HealthCheckController.get(req, res);
      case 'api-docs':
        break;
      default:
        return GenericDatasetController.get(req, res);
    }

  }
}

module.exports = GenericController;
