/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let res = []

    const flatten = (nums, l) => {
        for (const num of nums) {
            if (Array.isArray(num) && l > 0) {
                flatten(num, l - 1)
            } else {
                res.push(num)
            }
        }
    }
    flatten(arr, n)
    return res
}