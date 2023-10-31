/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  const check = function (multi, x) {
    console.log(multi, x)
    if (multi === x) {
      return true
    }

    let d = 10
    while (multi >= d && multi % d <= x) {

      if (check(Math.floor(multi / d), x - (multi % d))) {
        return true
      }
      d *= 10
    }
    return false
  }
  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (check(i * i, i)) {
      ans += i * i
    }
  }
  return ans
}

punishmentNumber(10)