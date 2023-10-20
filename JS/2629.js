
/**
 * @param {Function[]} functions
 * @return {Function}
 */
//reduceRight方法
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((target, fn) => fn(target), x)
  }
}

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
//反转数组使用forEach迭代
var compose = function (functions) {
  return function (x) {
    let funs = functions.reverse()
    funs.forEach(f => {
      x = f(x)
    })
    return x
  }
}