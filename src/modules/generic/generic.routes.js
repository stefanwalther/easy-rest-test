const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const GenericController = require('./generic.controller');
const logMiddleware = require('../../middleware/logMiddleware');

router.get('/file/:name', logMiddleware, GenericController.getFile);
router.get('/:name', logMiddleware, GenericController.get);

module.exports = router;
