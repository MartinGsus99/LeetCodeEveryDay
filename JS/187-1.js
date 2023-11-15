/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let map = {}

  const n = s.length
  let res = []
  for (let i = 0; i < n; i++) {
    let temp = s.substring(i, i + 10)
    console.log(temp)
    map[temp] = map[temp] === undefined ? 1 : map[temp] + 1
    if (map[temp] == 2) {
      res.push(temp)
    }
  }
  return res
}