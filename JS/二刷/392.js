/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const n = t.length

    if(s==""){
        return true
    }

    for (let i = 0; i < n; i++) {
        if (t[i] === s[0]) {
            s = s.slice(1)
        }
        if (s.length == 0) {
            return true
        }
    }
    return false

}