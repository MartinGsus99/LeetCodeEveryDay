/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.currentLength = 0
  this.queue = []
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  for (let i = 0; i < this.currentLength; i++) {
    console.log(this.queue[i])
    if (this.queue[i].key == key) {
      console.log("获取", this.queue[i].value)
      return this.queue[i].value
    }
  }
  console.log("未获取到值~")
  return -1
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.currentLength > this.capacity) {
    console.log("溢出最不常用的一项")
  }
  for (let i = 0; i < this.currentLength; i++) {
    if (this.queue[i].key == key) {
      this.queue[i].value = value
      console.log("赋值", value)
      return true
    }
  }
  let newData = {}
  newData.key = key
  newData.value = value
  console.log("添加", key, value)
  this.currentLength++
  this.queue.push(newData)
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let operations = ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
let behavior = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]

for (let i = 0; i < operations.length; i++) {
  if (operations[i] === "LFUCache") {
    var LRU = new LFUCache(behavior[i])
  }
  if (operations[i] === "put") {
    LRU.put(behavior[i][0], behavior[i][1])
  }
  if (operations[i] === "get") {
    LRU.get(behavior[i])
  }

}