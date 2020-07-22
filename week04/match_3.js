//使用状态机处理字符串
function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c)
  }
  return state === end;
}

function start(c) {
  return c == 'a' ? findB : start;
}

function findB(c) {
  return c == 'b' ? findC : start(c);
}

function findC(c) {
  return c == 'c' ? findD : start(c);
}

function findD(c) {
  return c == 'd' ? findE : start(c);
}

function findE(c) {
  return c == 'e' ? findF : start(c);
}

function findF(c) {
  return c == 'f' ? end : start(c);
}

function end() {
  return end;
}

console.log(match('ababcdef'))