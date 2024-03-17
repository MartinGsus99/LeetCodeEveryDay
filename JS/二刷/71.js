/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

    const words = path.split("/")
    const stack = []

    for (let c of words) {
        if (c === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else if (c.length && c !== '.') {
            stack.push(c)
        }
    }

    return "/" + stack.join("/")


}