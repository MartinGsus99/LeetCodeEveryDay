/*
 * @Author: Martin Wang 
 * @Date: 2023-08-03 20:45:36 
 * @Last Modified by: Martin Wang
 * @Last Modified time: 2023-08-04 10:27:29
 */

/**
 * @param {string[]} source
 * @return {string[]}
 */

/**
 * 解题思路：
 * 1.对于单行注释，删去s[i]中单行注释之后的字符串；若栈不为空，则跳过不处理
 * 2.对于多行注释：使用栈来记录已经存在的前缀。
 */

//胃痛过，未考虑两个字符之间存在注释的情况

var removeComments = function (source) {
  let res = new Array(source.length).fill("")
  console.log(res)
  let stack = []
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j <= source[i].length - 1; j++) {
      if (source[i][j] === "*" && source[i][j + 1] === "/") {
        stack.pop()
        j = j + 1
      } else if (source[i][j] === "/" && source[i][j + 1] === "*") {
        stack.push("/*")
        j = j + 1
      }
      else if (source[i][j] === "/" && source[i][j + 1] === "/" && stack.length === 0) {
        res[i] = "/"
        break
      } else if (stack.length === 0 && source[i][j] !== "/") {
        res[i] = res[i] + source[i][j]
      }
    }
  }

  console.log(res)
  let ans = []
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== " " && res[i] !== "/") {
      ans.push(res[i])
    }

  }
  return ans
}

//官方解法
var removeComments1 = function (source) {
  let res = []
  let newLine = ''
  let inBlock = false
  for (let line of source) {
    for (let i = 0; i < line.length; i++) {
      if (inBlock) {
        if (i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
          inBlock = false
          i++
        }
      } else {
        if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
          inBlock = true
          i++
        } else if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
          break
        } else {
          newLine += line[i]
        }
      }
    }
    if (!inBlock && newLine.length > 0) {
      res.push(newLine)
      newLine = ''
    }
  }
  return res
}



let source1 = ["/*Test program */", "int main()", "{ ", "// variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
let source2 = ["a/*comment", "line", "more_comment*/b"]
console.log(removeComments(source2))
// console.log(deleteMultiLinesComments("testing */"))
// ["int main()", "{ ", " ", "int a, b, c;", "a = b + c;", "}"]
// ["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"]