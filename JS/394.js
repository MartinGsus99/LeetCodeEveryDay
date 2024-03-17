/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  //设置两个栈，一个存数字一个存括号内字符
  const numStack = []
  const charStack = []
  let num = 0
  let res = ''
  for (const c of s) {
    //数字处理部分
    if (!isNaN(c)) {
      num = num * 10 + Number(c)
    } else if (c == '[') {
      charStack.push(res)
      res = ''
      numStack.push(num)
      num = 0
    } else if (c == ']') {
      let repeatTimes = numStack.pop()
      res = charStack.pop() + res.repeat(repeatTimes)
    } else {
      res += c
    }
  }
  return res

}