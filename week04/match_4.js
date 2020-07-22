//用状态机实现：字符串“abcabx”的解析
function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c)
  }
  return state === end;
}

function start(c) {
  return c === 'a' ? findA : start;
}

function findA(c) {
  return c === 'b' ? findB : start(c);
}

function findB(c) {
  return c === 'c' ? findC : start(c);
}

function findC(c) {
  return c === 'a' ? findA2 : start(c);
}

function findA2(c) {
  return c === 'b' ? findB2 : start(c);
}

function findB2(c) {
  return c === 'x' ? end : findB(c);
}

function end() {
  return end;
}

console.log(match('ababcaabxdef'))