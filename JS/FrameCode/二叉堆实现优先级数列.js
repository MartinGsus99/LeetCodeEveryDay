// 二叉堆其实是一种特殊的二叉树（完全），存储在数组中，根节点为0，子节点为2n和2n+1，父节点为n/2
//索引0不存储数据，从索引1开始存储数据
//性质：最大堆：每个节点都大于等于他的两个子结点；最小堆：每个节点都小于等于他的两个子结点
//对于最大堆：arr[1]一定是所有数据最大的，arr[1]的子节点一定是所有数据第二大的，以此类推

var MAXPQ = function (arr) {
  this.pq = []
  for (let i = 1; i < arr.length; i++) {
    this.pq[i] = arr[i - 1]
  }
  this.N = arr.length

  this.GetMax = function () {
    return this.pq[1]
  }

  this.parent = function (k) {
    return parseInt(k / 2)
  }

  this.left = function (k) {
    return k * 2
  }

  this.right = function (k) {
    return k * 2 + 1
  }

  this.exchange = function (i, j) {
    var temp = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = temp
  }


  this.less = function (i, j) {
    return this.pq[i] < this.pq[j] ? true : false
  }

  //上浮
  this.upSwim = function (k) {
    while (k > 1 && this.less(this.parent(k), k)) {
      this.exchange(this.parent(k), k)
      k = this.parent(k)
    }
  }

  this.sink = function (k) {
    while (this.left(k) <= this.N) {
      let older = this.left(k)
      if (this.right(k) <= this.N && this.less(older, this.right(k))) {
        older = this.right(k)
      }
      if (this.less(older, k)) {
        break
      }
      this.exchange(k, older)
      k = older
    }
  }

  this.Insert = function (e) {
    this.N++
    this.pq[this.N] = e
    this.upSwim(this.N)
  }
  this.delMax = function () {
    let max = this.pq[1]
    this.exchange(1, this.N)
    this.pq[this.N] == null
    this.N--
    this.sink(1)
    return max
  }
}

let arr = [5, 4, 3, 2, 1]
let newPriorityQueue = new MAXPQ(arr, 5)
console.log(newPriorityQueue.GetMax())
console.log(newPriorityQueue.pq)
newPriorityQueue.Insert(6)
console.log(newPriorityQueue.pq)
