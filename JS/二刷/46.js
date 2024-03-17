/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []

    const n = nums.length

    if (n == 0) {
        return res
    }

    const visited = new Map()

    const dfs = (n, path) => {
        if (path.length === n) {
            res.push(path)
            return
        }

        for (let i = 0; i < n; i++) {
            if (!visited.get(nums[i])) {
                visited.set(nums[i], 1)
                dfs(n, [...path, nums[i]])
                visited.set(nums[i], 0)
            }
        }

    }

    for (let i = 0; i < n; i++) {
        visited.set(nums[i], 1)
        dfs(n, [nums[i]])
        visited.set(nums[i], 0)

    }

    return res

}

let nums = [1, 2, 3]
console.log(permute(nums))