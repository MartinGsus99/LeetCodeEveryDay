/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  const strN = n.toString().split('').map(v => +v);
  let i = 1;
  while (i < strN.length && strN[i - 1] <= strN[i]) {
      i += 1;
  }
  if (i < strN.length) {
      while (i > 0 && strN[i - 1] > strN[i]) {
          strN[i - 1] -= 1;
          i -= 1;
      }
      for (i += 1; i < strN.length; ++i) {
          strN[i] = 9;
      }
  }
  return parseInt(strN.join(''));
};


let n = 1234
console.log(monotoneIncreasingDigits(n))