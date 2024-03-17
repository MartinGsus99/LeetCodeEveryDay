/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const res = new Array(n).fill(0)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    const t = temperatures[i]
    while (stack.length && t >= temperatures[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }
  return res
}

let t = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(t))