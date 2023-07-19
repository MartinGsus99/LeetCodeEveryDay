//36.74 55.90
var generateParemthesis = function (n) {
  if (n == 0) {
    return {}
  }

  let res = []
  let path = []

  var backtrack = function (left, right, path, res) {
    if (right < left) return
    if (left < 0 || right < 0) return
    if (left == 0 && right == 0) {
      res.push(path.join(''))
      return
    }

    //尝试放一个左括号
    path.push('(')
    backtrack(left - 1, right, path, res)
    path.pop()

    //尝试放一个右括号
    path.push(')')
    backtrack(left, right - 1, path, res)
    path.pop()
  }

  backtrack(n, n, path, res)
  return res
}

console.log(generateParemthesis(3))