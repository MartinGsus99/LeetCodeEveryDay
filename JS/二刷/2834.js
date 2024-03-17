/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function (n, target) {
    let mid = Math.floor(target / 2)
    let mod = 1e9 + 7
    let count = 0
    if (n <= mid) {

        count = ((1 + n) * n) / 2
    } else {
        let rest = n - mid
        count = ((1 + mid) * mid) / 2 + ((target + target + rest - 1) * rest) / 2

    }


    return count % mod

}