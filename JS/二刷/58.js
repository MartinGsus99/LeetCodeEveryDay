/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trim().split(' ')

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '') {
            return arr[i].length
        }
    }
    return 0
}