/* eslint-disable no-unused-vars */
const lodash = require('lodash');

class Hateoasify {

  constructor(config) {
    this.data = config.data || {};
  }

  format() {
    return this.data;
  }

  setData(data) {
    this.data = data;
    return this;
  }
}
