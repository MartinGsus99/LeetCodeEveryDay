/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const steps = new Array(n).fill(0)

    steps[0] = 0
    steps[1] = 1
  
    for (let i = 2; i <= n+1; i++) {
        steps[i] = steps[i - 1] + steps[i - 2]
    }

    return steps[n+1]
}