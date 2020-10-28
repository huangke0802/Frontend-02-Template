var assert = require('assert');
// var {
//   add
// } = require('../add.js');

import {add} from "../add"

describe('Test add function', function () {
  it('1 + 2 should be 3', function () {
    assert.equal(add(1, 2), 3);
  });
  it('-1 - 5 should be -6', function () {
    assert.equal(add(-1, -5), -6);
  });

});