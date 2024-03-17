/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []


    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        } else {
            let top = stack.pop()
            console.log(top, s[i])
            if (s[i] == ')' && top != '(') {
                return false
            } else if (s[i] == ']' && top != '[') {
                return false
            } else if (s[i] == '}' && top != '{') {
                return false
            }
        }
    }

    return stack.length == 0 ? true : false
}