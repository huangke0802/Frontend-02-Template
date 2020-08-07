class MatchDom {
  constructor() {
    this.attr = {};
    this.EOF = Symbol('EOF');
  }

  data(c) {
    console.log(this)
    if (c == "#") {
      this.attr.id = '';
      return this.getID
    } else if (c == '.') {
      if (!this.attr.classNames) {
        this.attr.classNames = [];
      }

      this.attr.classNames.push("")
      return this.getClassName
    } else if (c == this.EOF) {
      return;
    }
  }

  getID(c) {
    if (c === '.') {
      return this.getClassName;
    } else {
      this.attr.id += c;
      return this.getID;
    }
  }

  getClassName(c) {
    if (c === this.EOF) {
      return
    } else if (c === '.') {
      return this.data(c);
    } else {
      if (!this.attr.classNames) {
        this.attr.classNames = [""];
      }
      const idx = this.attr.classNames.length - 1;
      const _str = this.attr.classNames[idx];

      this.attr.classNames[idx] = _str + c;
      return this.getClassName
    }
  }

  getDomInfo(selector) {
    var state = this.data;
    for (var i of selector) {
      state = state.bind(this)(i)
    }
    state = state.bind(this)(this.EOF);
    return this.attr
  }

}

const a = new MatchDom();
const _attr = a.getDomInfo("#id.class.box")


function match(selector, element) {
  const _arr = selector.split(' ');
  const self = _arr[_arr.length - 1];
  const _matchDom = new MatchDom();
  const _attr = _matchDom.getDomInfo(self);
  const isMatchSelf = false;
  const _className = element.className.split(" ")
  if (_attr.id && element.id === _attr.id) {
    isMatchSelf = true;
  }
  if (_attr.id && element.id !== _attr.id) {
    isMatchSelf = false;
  }

  if (_attr && _attr.classNames) {
    _attr.classNames.map(v => {
      if (v.indexOf(_className)) {
        isMatchSelf = true;
      } else {
        isMatchSelf = false;
      }
    })
  }


  if (_arr.length == 0) {
    return isMatchSelf;
  } else {


  }
  return true;
}