export function createElement(type, attributes, ...children) {
  let element;
  if ('string' === typeof type) {
    element = new ElementWrapper(type);
  } else {
    element = new type;
  }
  for (let name in attributes) {
    element.setAttribute(name, attributes[name]);
  }
  for (let child of children) {
    if ('string' === typeof child) {
      child = new TextWrapper(child);
    }
    element.appendChild(child);
  }
  return element;
}

export const STATE = Symbol('state');
export const ATTRIBUTE = Symbol('attribute');

export class Component {
  constructor() {
    this[ATTRIBUTE] = Object.create(null);
    this[STATE] = Object.create(null);
  }

  setAttribute(name, value) {
    this[ATTRIBUTE][name] = value;
  }

  appendChild(child) {
    child.mountTo(this.root);
  }

  mountTo(parent) {
    if (!this.root) {
      this.render();
    }
    parent.appendChild(this.root);
  }

  triggerEvent(type, args){
    this[ATTRIBUTE]['on' + type.replace(/^[\s\S]/, s => s.toUpperCase() )](new CustomEvent(type, {detail:args}));
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    this.root = document.createElement(type);
  }

}

class TextWrapper extends Component {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}