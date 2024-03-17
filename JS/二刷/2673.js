/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
//记录每一层的最大值，然后用每一层的最大值减去当前层的值求和
var minIncrements = function (n, cost) {

    const array = new Array(n).fill(new Array())
    const traverse = function (node) {
        const queue = [node]

        while (queue.length != 0) {
            let size = queue.length
            let newArray = []
            for (let i = 0; i < size; i++) {
                let cur = queue.pop()
                newArray.push(cur.cost)
                queue.push(cur.left)
                queue.push(cur.right)
            }
            array.push(newArray)

        }

    }

    console.log(array)


}


//贪心算法，从底部向上
var minIncrements = function (n, cost) {
    let ans = 0

    for (let i = n - 2; i >= 0; i -= 2) {
        ans += Math.abs(cost[i] - cost[i + 1])
        cost[i >> 1] += Math.max(cost[i], cost[i + 1])
    }
    return ans
}
