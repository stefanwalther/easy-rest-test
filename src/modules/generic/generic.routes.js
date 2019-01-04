const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const GenericController = require('./generic.controller');

router.get('/:name', GenericController.get);

module.exports = router;
