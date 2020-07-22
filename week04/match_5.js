// 作业：使用状态机完成”abababx”的处理。
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
  return c === 'a' ? findA2 : start(c);
}

function findA2(c) {
  return c === 'b' ? findB2 : start(c);
}

function findB2(c) {
  return c === 'a' ? findA3 : start(c);
}

function findA3(c) {
  return c === 'b' ? findB3 : start(c);
}

function findB3(c) {
  return c === 'x' ? end : findB2(c);
}

function end() {
  return end;
}

console.log(match('ababcabababx'))