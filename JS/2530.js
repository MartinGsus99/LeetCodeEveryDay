/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//每次选择最大的一个即可；超时
var maxKelements = function (nums, k) {
  const findMax = function (nums) {
    let max = nums[0]
    let index = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i]
        index = i
      }
    }
    return index
  }

  let count = 0

  for (let i = 0; i < k; i++) {
    let maxIndex = findMax(nums)
    count += nums[maxIndex]
    nums[maxIndex] = Math.ceil(nums[maxIndex] / 3)
  }
  return count
}

//最大堆方法，每次从堆顶取出一个最大值加入count，然后将其除以3入堆

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  nums.sort((a, b) => b - a)
  const getMax = () => {
    [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]]
    let top = 0, max = nums.pop()
    while ((top + 1) * 2 - 1 < nums.length) {
      let l = (top + 1) * 2 - 1, r = (top + 1) * 2, changeNode = l
      if (nums[r] && nums[l] < nums[r]) {
        changeNode = r
      }
      if (nums[changeNode] > nums[top]) {
        [nums[changeNode], nums[top]] = [nums[top], nums[changeNode]]
        top = changeNode
      } else {
        break
      }
    }
    return max
  }
  const add = (num) => {
    nums.push(num)
    let bottom = nums.length - 1
    while (bottom) {
      const top = (bottom - 1) >> 1
      if (nums[top] < nums[bottom]) {
        [nums[top], nums[bottom]] = [nums[bottom], nums[top]]
        bottom = top
      } else {
        break
      }
    }
  }
  let ans = 0
  while (k--) {
    let num = getMax()
    ans += num
    add(Math.ceil(num / 3))
  }
  return ans
}

//leetcode方法使用自带的类型
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let ans = 0
  const pq = new MaxPriorityQueue()
  for (const i of nums) {
    pq.enqueue(i)
  }
  for (let i = 0; i < k; i++) {
    const x = pq.dequeue().element
    ans += x
    pq.enqueue(Math.ceil(x / 3))
  }
  return ans
};

