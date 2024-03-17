/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = ''
    const n = strs.length

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < n; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return res
            }
        }
        res += strs[0][i]
    }
    return res
}

var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    let res = strs[0]
    for (ch of strs) {
        for (let i = 0; i < res.length; i++) {
            if (ch[i] !== res[i]) {
                res = res.slice(0, i)
                break
            }
        }
    }
    return res
}