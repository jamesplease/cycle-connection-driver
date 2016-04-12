global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));

require('babel-core/register');
require('./setup')();

var simpleJSDom = require('simple-jsdom');
simpleJSDom.install();
