/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0, right = numbers.length - 1
  let res = []
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum < target) {
      left++
    } else if (sum > right) {
      right--
    } else {
      res.push(left)
      res.push(right)
    }
  }
  return res
}

let numbers = [2, 7, 11, 15], target = 9
console.log(twoSum(numbers, target))