/**
 * @param {number} n
 * @return {string[]}
 */
//99.55 59.12
var generateParenthesis = function (n) {
  if (n == 0) {
    return {}
  }

  let path = []
  let res = []

  var backtrack = function (left, right, path, res) {
    if (right < left) {
      return
    }

    if (left < 0 || right < 0) {
      return
    }

    if (left == 0 && right == 0) {
      res.push(path.join(''))
      return
    }

    path.push('(')
    backtrack(left - 1, right, path, res)
    path.pop()

    path.push(')')
    backtrack(left, right - 1, path, res)
    path.pop()
  }

  backtrack(n, n, path, res)
  return res
}