/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length == 0) {
    console.log(-1)
    return -1
  } else {
    console.log(this[this.length - 1])
    return this[this.length - 1]
  }
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length===0?-1:this[this.length-1]
}


Array.prototype.last = function() {
  // 使用合并操作符：？？，当左边是null或者undefined时，返回右边边
  // 防止左边是0时，也返回右边
  return this[this.length - 1] ?? -1
};


const arr = [1, 2, 3]
arr.last()