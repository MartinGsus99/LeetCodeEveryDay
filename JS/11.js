
/**
 * @param {number[]} height
 * @return {number}
 */
//解题思路：最大盛水量为：(index1-index0)*min（height[index1],height[index0])
//超时
var maxArea1 = function (height) {

    const getVolumn = function (i, j) {
        let w = j - i
        let h = Math.min(height[i], height[j])
        return w * h
    }

    const volumns = []
    for (let i = 0; i < height.length - 1; i++) {
        let max = 0
        for (let j = i + 1; j < height.length; j++) {
            let temp = getVolumn(i, j)
            if (temp > max) {
                max = temp
            }
        }
        volumns[i] = max
    }

    return Math.max(...volumns)

}

/**
 * @param {number[]} height
 * @return {number}
 */
//解题思路：
//双指针::每次移动较低的板向中间
//
// 若向内 移动短板 ，水槽的短板 min(h[i],h[j])min(h[i], h[j])min(h[i],h[j]) 可能变大，因此下个水槽的面积 可能增大 。
// 若向内 移动长板 ，水槽的短板 min(h[i],h[j])min(h[i], h[j])min(h[i],h[j])​ 不变或变小，因此下个水槽的面积 一定变小 。


var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let max_height = 0
    while (left < right) {
        let temp = (right - left) * Math.min(height[left], height[right])
        if (height[left] < height[right]) {
            max_height = Math.max(max_height, temp)
            left++
        } else {
            max_height = Math.max(max_height, temp)
            right--
        }
    }

    return max_height
}
let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(heights))