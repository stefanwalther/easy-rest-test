const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

process.NODE_ENV = 'test';

chai.use(chaiAsPromised);
global.expect = chai.expect;
