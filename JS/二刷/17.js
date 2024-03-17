/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits == "") {
        return []
    }

    const map = {

        2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z']
    }

    const res = []

    const n = digits.length

    const helper = function (start, resStr) {
        if (resStr.length === n) {
            res.push(resStr)
            return
        }

        const arr = map[digits[start]]

        for (let i = 0; i < arr.length; i++) {
            helper(start + 1, resStr + arr[i])
        }
    }

    helper(0,"")

    return res

}