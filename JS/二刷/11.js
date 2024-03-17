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

/**
 * @param {number[]} height
 * @return {number}
 */
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