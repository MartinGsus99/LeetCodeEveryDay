/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    const res = []

    const dfs = (cur, n, k, path) => {
        if (path.length + (n - cur + 1) < k) {
            return
        }

        if (path.length === k) {
            res.push(path)
            return
        }

        dfs(cur + 1, n, k, [...path, cur])
        dfs(cur + 1, n, k, path)
    }

    dfs(1, n, k, [])

    return res
}

let n = 4, k = 2
console.log(combine(n, k))