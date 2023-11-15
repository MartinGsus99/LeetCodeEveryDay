/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) {
    return {}
  }

  let path = []
  let res = []

  const backTrack = function (left, right, path, res) {
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
    backTrack(left - 1, right, path, res)
    path.pop()

    path.push(')')
    backTrack(left, right - 1, path, res)
    path.pop()

  }

  backTrack(n, n, path, res)
  return res
};


