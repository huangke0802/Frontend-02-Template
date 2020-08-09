class MatchDom {
  constructor() {
    this.attr = {
      id: "",
      tagName: "",
    };
    this.EOF = Symbol('EOF');
  }

  data(c) {
    if (c == "#") {
      if (!this.attr.id)
        this.attr.id = '';
      return this.getID
    } else if (c == '.') {
      if (!this.attr.classNames) {
        this.attr.classNames = [];
      }

      this.attr.classNames.push("")
      return this.getClassName
    } else if (c !== this.EOF && c.match(/^[a-zA-Z]$/)) {
      return this.getTagName(c)
    } else if (c == this.EOF) {
      return;
    }
  }

  getTagName(c) {
    if (c !== this.EOF && c.match(/^[a-zA-Z]$/)) {
      if (!this.attr.tagName) {
        this.attr.tagName = '';
      }
      this.attr.tagName += c;
      return this.getTagName;
    } else {
      return this.data(c)
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
    //selector只有一级，没有父子关系的选择器
  match(selector, element) {
    const _attr = this.getDomInfo(selector);

    const el_tagName = element.tagName.toUpperCase();
    const el_id = element.id;
    const el_classNames = element.className.split(' ');

    if (_attr && _attr.tagName && _attr.tagName.toUpperCase() != el_tagName) {
      return false;
    }

    if (_attr && _attr.id && _attr.id != el_id) {
      return false;
    }

    if (_attr.classNames && _attr.classNames.length > 0) {
      var _temp = true;
      for (var i of _attr.classNames) {
        if (el_classNames.indexOf(i) < 0) {
          _temp = false;
          break;
        }
      }

      if (!_temp) {
        return false;
      }
    }

    return true;

  }

}

function match(selector, element) {
  const _arr = selector.split(' ').reverse();

  const getElParent = (el, num = 0) => {
    if (num == 0) {
      return el;
    } else {
      return getElParent(el.parentElement, num - 1)
    }
  }
  var _matchDom, _isMatch = true,
    _el;
  for (var i = 0; i < _arr.length; i++) {
    _matchDom = new MatchDom();
    _el = getElParent(element, i);
    _isMatch = _matchDom.match(_arr[i], _el);
    if (!_isMatch) {
      break;
    }
  }

  return _isMatch;
}

const selector = "div.aaa #id.class.box";
const el = document.getElementById('id')
console.log(match(selector, el))