var isValid = function (string) {
  const stack = []

  const getSign = function (s) {
    if (s == "}") {
      return "{"
    } else if (s == "]") {
      return "["
    } else if (s == ")") {
      return "("
    } else {
      console.log("Error sign")
      return
    }
  }

  for (let i = 0; i < string.length; i++) {
    console.log(string[i])
    if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
      stack.push(string[i])
    } else {
      if (stack.length != 0 && stack[stack.length - 1] === getSign(string[i])) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

var isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stk = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    }
    else {
      stk.push(ch)
    }
  };
  return !stk.length
}




let str = "((({})))"
console.log(isValid(str))