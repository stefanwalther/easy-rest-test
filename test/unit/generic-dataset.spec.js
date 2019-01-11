
const GenericDatasetController = require('./../../src/modules/generic-dataset/generic-dataset.controller');

describe('[unit] => generic-dataset', () => {

  describe('_getOptions', () => {
    it('returns the default `delay` setting', () => {
      let res = GenericDatasetController._getOptions({});
      expect(res).to.have.property('delay', 0);
    });
    it('returns the `delay` option', () => {
      let ctx = {
        query: {
          delay: 1000
        }
      };
      let res = GenericDatasetController._getOptions(ctx);
      expect(res).to.have.property('delay', ctx.query.delay);
    });
    it('throws an error if option `delay` is not a number', () => {
      let ctx = {
        query: {
          delay: 'xx'
        }
      };
      expect(() => {GenericDatasetController._getOptions(ctx)}).to.throw();
    });
  })

});
