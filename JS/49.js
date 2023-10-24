/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//将每个单词计算各个字母的数量，各个字母数量相同的放到一起
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    let array = Array.from(str)
    console.log(array)
    array.sort()
    let key = array.toString()
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))