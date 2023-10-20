
var RandomizedSet = function () {
  this.map = new Map()
  this.data = []
}

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false
  }
  this.map.set(val, this.data.length)
  this.data.push(val)
  return true
}

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    let index = this.map.get(val)
    this.data[index] = this.data[this.data.length - 1]
    this.data.pop()
    this.map.set(this.data[index], index)
    this.map.delete(val)
    return true
  }
  return false
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdnex = Math.floor(Math.random() * this.data.length)
  return this.data[randomIdnex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */