function match(selector, element) {
  var _arr = selector.split(' ');
  if (_arr.length == 0) {

  } else {


  }
  return true;
}
const EOF = Symbol('EOF');
var selector = "#id.class.box";
var attr = {};

function data(c) {
  if (c == "#") {
    attr.id = '';
    return getID
  } else if (c == '.') {
    if (!attr.classNames) {
      attr.classNames = [];
    }

    attr.classNames.push("")
    return getClassName
  } else if (c == EOF) {
    return;
  }
}

function getID(c) {
  if (c === '.') {
    return getClassName;
  } else {
    attr.id += c;
    return getID;
  }
}

function getClassName(c) {
  if (c === EOF) {
    return
  } else if (c === '.') {
    return data(c);
  } else {
    if (!attr.classNames) {
      attr.classNames = [""];
    }
    const idx = attr.classNames.length - 1;
    const _str = attr.classNames[idx];

    attr.classNames[idx] = _str + c;
    return getClassName
  }
}

function getDomInfo()
var state = data;
for (var i of selector) {
  state = state(i)
}

state = state(EOF);
console.log(attr)