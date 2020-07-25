//利用Symbol的唯一性，用来结束文件
const EOF = Symbol('EOF');

function data(c) {

}

module.exports.parseHTML = function parserHTML(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF);
}