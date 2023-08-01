//70.82 86.04
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return '0'
  }
  let m = num1.length, n = num2.length
  let res = new Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j]
      let p1 = i + j, p2 = i + j + 1
      let sum = mul + res[p2]
      res[p1] += Math.floor(sum / 10)
      res[p2] = sum % 10
    }
  }

  if (res[0] === 0) res.shift()
  return res.join("")
}

let a = "2"
let b = "3"

console.log(multiply(a, b))