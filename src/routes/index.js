const Router = require('koa-router');

const HealthCheckController = require('./../modules/health-check/health-check.controller');
const GenericDatasetController = require('./../modules/generic-dataset/generic-dataset.controller');

const router = new Router();

router.get('/health-check', HealthCheckController.get);
router.get('/file/:name', GenericDatasetController.getFile);
router.get('/:name', GenericDatasetController.get);

module.exports = router;
