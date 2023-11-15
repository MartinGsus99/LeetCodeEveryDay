/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs1 = function (spells, potions, success) {
  const n = spells.length
  const m = potions.length
  const res = new Array(n).fill(0)
  potions.sort(function (a, b) {
    return b - a
  })
  console.log(potions)
  for (let i = 0; i < n; i++) {
    let count = 0

    for (let j = 0; j < m; j++) {
      console.log(spells[i], potions[j])
      if (potions[j] * spells[i] >= success) {
        count++
      } else {
        break
      }
    }
    res[i] = count
    count = 0
  }
  return res
}


/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const n = spells.length
  const m = potions.length
  const res = new Array(n).fill(0)
  potions.sort(function (a, b) {
    return a - b
  })

  const binarySearch = function (nums, target, low, high) {
    let res = high + 1

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2)
      if (nums[mid] > target) {
        res = mid
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return res
  }



  return spells.map((item) => {
    return m - binarySearch(potions, (success - 1) / item, 0, m - 1)
  })

}


let spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7
console.log(successfulPairs(spells, potions, success))