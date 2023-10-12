// class Node {
//   constructor(key = 0, value = 0) {
//     this.key = key
//     this.value = value
//     this.prev = null
//     this.next = null
//   }
// }
var Node = function (key = 0, value = 0) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.guard = new Node()
  this.guard.prev = this.guard
  this.guard.next = this.guard
  this.map = new Map()
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.getNode = function (key) {
  if (!this.map.has(key)) {
    return null
  } else {
    const node = this.map.get(key)
    this.remove(node)
    this.pushToFront(node)
    return node
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.getNode(key)
  return node ? node.value : -1
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.getNode(key)
  if (node) {
    node.value = value
    return
  }
  node = new Node(key, value)
  this.map.set(key, value)
  this.pushToFront(node)
  if (this.map.size > this.capacity) {
    const backNode = this.guard.prev
    this.map.delete(backNode.key)
    this.remove(backNode)
  }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.pushToFront = function (node) {
  node.prev = this.guard
  node.next = this.guard.next
  node.prev.next = node
  node.next.prev = node
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let operations = ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
let behavior = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]

for (let i = 0; i < operations.length; i++) {
  if (operations[i] === "LFUCache") {
    var LRU = new LRUCache(behavior[i])
  }
  if (operations[i] === "put") {
    LRU.put(behavior[i][0], behavior[i][1])
  }
  if (operations[i] === "get") {
    LRU.get(behavior[i])
  }
  console.log(LRU)
}


class Node {
  constructor(key = 0, value = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.dummy = new Node() // 哨兵节点
    this.dummy.prev = this.dummy
    this.dummy.next = this.dummy
    this.keyToNode = new Map()
  }

  getNode (key) {
    if (!this.keyToNode.has(key)) { // 没有这本书
      return null
    }
    const node = this.keyToNode.get(key) // 有这本书
    this.remove(node) // 把这本书抽出来
    this.pushFront(node) // 放在最上面
    return node
  }

  get (key) {
    const node = this.getNode(key)
    return node ? node.value : -1
  }

  put (key, value) {
    let node = this.getNode(key)
    if (node) { // 有这本书
      node.value = value // 更新 value
      return
    }
    node = new Node(key, value) // 新书
    this.keyToNode.set(key, node)
    this.pushFront(node) // 放在最上面
    if (this.keyToNode.size > this.capacity) { // 书太多了
      const backNode = this.dummy.prev
      this.keyToNode.delete(backNode.key)
      this.remove(backNode) // 去掉最后一本书
    }
  }

  // 删除一个节点（抽出一本书）
  remove (x) {
    x.prev.next = x.next
    x.next.prev = x.prev
  }

  // 在链表头添加一个节点（把一本书放在最上面）
  pushFront (x) {
    x.prev = this.dummy
    x.next = this.dummy.next
    x.prev.next = x
    x.next.prev = x
  }
}

// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/lru-cache/solutions/2456294/tu-jie-yi-zhang-tu-miao-dong-lrupythonja-czgt/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。