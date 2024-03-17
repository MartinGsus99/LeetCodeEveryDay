/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '1') {
            count++
        }
    }
    return '1'.repeat(count - 1) + '0'.repeat(s.length - count) + '1'



}