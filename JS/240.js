/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  let index = []
  for (let i = 0; i < m; i++) {
    index.push(matrix[i][0])
  }

  const binarySearch = function (nums, target) {
    const n = nums.length

    let left = 0, right = n - 1

    while (left <= right) {

      let mid = parseInt((left + right) / 2)
      console.log(left, right, mid)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        return true
      }
    }
    return false
  }

  let tempIndex = 0
  for (let i = 0; i < n; i++) {
    if (index[i] < target && index[i + 1] > target) {
      tempIndex = i
    }
  }
  console.log(tempIndex)

  return binarySearch(matrix[tempIndex], target) || binarySearch(matrix[m - 1], target)
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//超时
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  let queue = []
  queue.push([0, 0])
  while (queue.length !== 0) {
    let cur = queue.pop()
    if (matrix[cur[0]][cur[1]] === target) {
      return true
    }
    if (cur[0] + 1 < m) {
      queue.push([cur[0] + 1, cur[1]])
    }
    if (cur[1] + 1 < n) {
      queue.push([cur[0], cur[1] + 1])
    }
  }
  return false
}

let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
let matrix1 = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target1 = 20
let matrix2 = [[1, 6, 6, 9, 14, 14, 17], [5, 8, 9, 9, 14, 17, 18], [5, 10, 11, 12, 18, 18, 20], [5, 15, 16, 16, 20, 23, 27], [7, 15, 19, 21, 22, 24, 31], [12, 16, 22, 22, 24, 25, 34], [16, 21, 23, 26, 26, 30, 37], [18, 25, 25, 30, 33, 36, 37], [22, 30, 31, 33, 34, 39, 42]], target2 = 5
console.log(searchMatrix(matrix, target))
console.log(searchMatrix(matrix1, target1))
console.log(searchMatrix(matrix2, target2))