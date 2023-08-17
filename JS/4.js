/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//找到两个数组的中位数，然后相加除2，未通过测试，思路错误
var findMedianSortedArrays1 = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  console.log(m, n)
  let mid1, mid2
  if (m !== 0) {
    if (m % 2 === 0) {
      mid1 = (nums1[m / 2 - 1] + nums1[m / 2]) / 2

    } else {
      mid1 = nums1[Math.floor(m / 2)]
    }
  } else {
    mid1 = 0
  }

  if (n !== 0) {
    if (n % 2 === 0) {
      mid2 = (nums2[n / 2 - 1] + nums2[n / 2]) / 2
    } else {
      mid2 = nums2[Math.floor(n / 2)]
    }
  } else {
    mid2 = 0
  }
  if (m === 0) {
    return mid2
  } else if (n === 0) {
    return mid1
  }

  return (mid1 + mid2) / 2

}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//先获取合并数组的长度，然后遍历数组到l/2  60.52 62.74
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const length = m + n

  let merge = []
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      merge.push(nums1[0])
      nums1.shift()
    } else {
      merge.push(nums2[0])
      nums2.shift()
    }
  }
  if (nums1.length !== 0) {
    merge = merge.concat(nums1)
  } else {
    merge = merge.concat(nums2)
  }

  console.log(merge)
  if (length % 2 === 0) {
    return (merge[length / 2 - 1] + merge[length / 2]) / 2
  }
  return merge[Math.floor(length / 2)]
}
//let nums1 = [1, 3], nums2 = [2]
//let nums1 = [], nums2 = [3, 4]
let nums1 = [], nums2 = [3]
//let nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))