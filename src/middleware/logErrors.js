const logger = require('winster').instance();

function logErrors(err, req, res, next) {
  logger.trace(err.stack);
  next(err);
}

module.exports = logErrors;
