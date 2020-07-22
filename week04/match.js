function findStr(str) {
  let findA = false;
  for (let i of str) {
    if (i === 'a') {
      findA = true;
    } else if (findA && i === 'b') {
      return true;
    } else {
      findA = false;
    }
  }
  return false;
}

console.log(findStr('ghgdsfgdsfaba'))
console.log(findStr('cccacccb'))