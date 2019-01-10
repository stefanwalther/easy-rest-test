const pkg = require('./../../../package.json');

module.exports.get = ctx => {
  ctx.status = 200;
  ctx.body = {
    ts: new Date().toJSON(),
    version: pkg.version,
    name: pkg.name,
    repository: pkg.repository
  };
};
