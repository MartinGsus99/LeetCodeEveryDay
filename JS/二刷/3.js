/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length

    let set = new Set()

    let rk = -1, maxLength = 0

    for (let i = 0; i < n; i++) {
        if (i != 0) {
            set.delete(s.charAt(i - 1))
        }

        while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
            set.add(s.charAt(rk + 1))
            ++rk
        }
        maxLength = Math.max(maxLength, rk - i + 1)
    }



    return maxLength
}