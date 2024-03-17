/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//不会
//解法一：排序各个单词的字母
var groupAnagrams = function (strs) {
    const map = new Map()

    for (let str of strs) {
        let array = Array.from(str)
        array.sort()

        let key = array.toString()
        let list = map.get(key) ? map.get(key) : new Array()
        list.push(str)
        map.set(key, list)
    }
    return Array.from(map.values())
}

//计数：统计各个单词的字母数量
var groupAnagrams = function (strs) {
    const map = new Object()

    for (let str of strs) {
        const count = new Array(26).fill(0)

        for (let c of str) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++
        }
        map[count] ? map[count].push(str) : map[count] = [str]

    }
    return Object.values(map)
}
