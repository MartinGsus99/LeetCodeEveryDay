/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const n = candidates.length
    const res = []


    const dfs = (curCount, path) => {
        if (curCount === target) {
            res.push(path)
            return
        }
        if (curCount > target) {
            return
        }

        for (let i = 0; i < n; i++) {
            dfs(curCount + candidates[i], [...path, candidates[i]])
        }
    }

    for (let i = 0; i < n; i++) {
        dfs(candidates[i], [candidates[i]])
    }



    return res
}

let candidates = [2, 3, 5], target = 8
console.log(combinationSum(candidates, target))
//以上方法无法去重

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = []

    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return
        }

        if (target === 0) {
            ans.push(combine)
            return
        }

        dfs(target, combine, idx + 1)
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine,candidates[idx]], idx)
        }
    }
    dfs(target,[],0)
    return ans
}