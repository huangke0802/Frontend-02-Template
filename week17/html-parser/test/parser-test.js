var assert = require('assert');

import {
  parserHTML
} from "../src/parser"

describe('parser HTML : ', function() {

  it('<a>abc</a>', function() {
    const obj = parserHTML("<a>abc</a>");
    console.log(obj)
    assert.equal(obj.tagName, 'a');
  });
  it('<a>abc</a>', function() {
    const obj = parserHTML("<a>abc</a>");
    console.log(obj)
    assert.equal(obj.children.length, 1);
  });

});