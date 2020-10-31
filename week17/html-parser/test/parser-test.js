var assert = require('assert');

import {
  parserHTML
} from "../src/parser.js"
describe('parser HTML : ', function() {

  it('<a></a>', function() {
    const tree = parserHTML("<a></a>");
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });

  it('<a href="//time.geekbang.org"></a>', function() {
    const tree = parserHTML(`<a href="//time.geekbang.org"></a>`);
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href></a>', function() {
    const tree = parserHTML(`<a href></a>`);
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id=a></a>', function() {
    const tree = parserHTML(`<a id=a></a>`);
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id class></a>', function() {
    const tree = parserHTML(`<a id  class></a>`);
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });

  it(`<a id='box'></a>`, function() {
    const tree = parserHTML(`<a id='box'></a>`);
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 0);
  });

  it('<img id=abc />', function() {
    const tree = parserHTML(`<img id=abc />`);
    assert.equal(tree.children[0].tagName, 'img');
    assert.equal(tree.children[0].children.length, 0);
  });

  it('<img id="abc" />', function() {
    const tree = parserHTML(`<img id="abc" />`);
    assert.equal(tree.children[0].tagName, 'img');
    assert.equal(tree.children[0].children.length, 0);
  });
  it(`<a />`, function() {
    const tree = parserHTML(`<a />`);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });

  it(`<A /> upper `, function() {
    const tree = parserHTML(`<A />`);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });

  it(`<>`, function() {
    const tree = parserHTML(`<>`);
    console.log(tree.children)
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].type, 'text');
  });

  it(`<a>abc</a> `, function() {
    const tree = parserHTML(`<a>abc</a>`);
    console.log(tree.children)
    assert.equal(tree.children[0].tagName, 'a');
    assert.equal(tree.children[0].children.length, 1);
  });

});