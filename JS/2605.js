/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  const findMin = function (arr) {
    arr.sort(function (a, b) {
      return a - b
    })
    return arr[0]
  }
  let map = new Map()
  for (let num of nums1) {
    map.set(num, 1)
  }
  let minnums = []
  for (let num of nums2) {
    if (map.get(num)) {
      minnums.push(num)
    }
  }
  if (minnums.length !== 0) {
    return findMin(minnums)
  } else {
    return Math.min(findMin(nums1) * 10 + findMin(nums2), findMin(nums2) * 10 + findMin(nums1))
  }
}

var minNumber = function(nums1, nums2) {
  const same = () => {
      const s = new Set(nums1);
      let x = 10;
      for (const m of nums2) {
          if (s.has(m)) {
              x = Math.min(x, m);
          }
      }
      return x == 10 ? -1 : x;
  }
  const count = same();
  if (count != -1) {
      return count;
  }
  const x = Math.min(...nums1);
  const y = Math.min(...nums2);
  return Math.min(x * 10 + y, y * 10 + x);
};



let nums1 = [6, 4, 3, 7, 2, 1, 8, 5]
let nums2 = [6, 8, 5, 3, 1, 7, 4, 2]

console.log(minNumber(nums1, nums2))