/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const n = s.length
    let ms = ''
    for (let i = 0; i < n; i++) {

        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
            ms += s[i].toLowerCase()
        }
    }


    let left = 0, right = ms.length- 1

    while (left < right) {
        if (ms[left] === ms[right]) {
            left++
            right--
        } else {
       
            return false
        }
    }
    return true
}