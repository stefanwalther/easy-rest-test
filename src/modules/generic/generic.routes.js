const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const asyncWrap = require('./../../middleware/wrap');
const GenericController = require('./generic.controller');

router.get('/file/:name', GenericController.getFile);
router.get('/:name', asyncWrap(GenericController.get));

module.exports = router;
