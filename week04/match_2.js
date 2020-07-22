//不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”

function match(str) {
  let findA = false,
    findB = false,
    findC = false,
    findD = false,
    findE = false;
  for (let cha of str) {
    if (cha == 'a') {
      findA = true;
    } else if (findA && cha == 'b') {
      findB = true;
    } else if (findA && findB && cha == 'c') {
      findC = true;
    } else if (findA && findB && findC && cha == 'd') {
      findD = true;
    } else if (findA && findB && findC && findD && cha == 'e') {
      findE = true;
    } else if (findA && findB && findC && findD && findE && cha == 'f') {
      return true
    } else {
      findA = false;
      findB = false;
      findC = false;
      findD = false;
      findE = false;
    }
  }
  return false;
}

const r = match('cccacbcdef');
console.log(r)