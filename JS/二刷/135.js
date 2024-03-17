var candy = function (ratings) {
    const n = ratings.length
    const left = new Array(n).fill(0)

    //左边给一边，右边给一边
    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1
        } else {
            left[i] = 1
        }
    }

    let right = 0, ret = 0
    for (let i = n - 1; i > -1; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++
        } else {
            right = 1
        }
        ret += Math.max(left[i], right)
    }
    return ret
}



/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let res = 0
    const n = ratings.length
    const leftCandies = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            leftCandies[i] = leftCandies[i - 1] + 1
        } else {
            leftCandies[i] = 1
        }
    }

    let rightCandies = new Array(n).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            rightCandies[i] = rightCandies[i + 1] + 1
        } else {
            rightCandies[i] = 1
        }
        res += Math.max(leftCandies[i], rightCandies[i])
    }
    return res
}