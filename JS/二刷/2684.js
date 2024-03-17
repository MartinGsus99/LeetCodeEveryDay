/**
 * @param {number[][]} grid
 * @return {number}
 */
//深度优先:未通过全部用力
var maxMoves1 = function (grid) {

    const m = grid.length
    const n = grid[0].length

    const dfs = function (curRow, curCol) {
        let curVal = grid[curRow][curCol]


        console.log(curVal)
        if (curRow - 1 >= 0 && curCol + 1 < n && grid[curRow - 1][curCol + 1] > curVal) {
            return dfs(curRow - 1, curCol + 1) + 1
        }
        if (curRow >= 0 && curCol + 1 < n && grid[curRow][curCol + 1] > curVal) {
            return dfs(curRow, curCol + 1) + 1
        }
        if (curRow + 1 < m && curCol + 1 < n && grid[curRow + 1][curCol + 1] > curVal) {
            return dfs(curRow + 1, curCol + 1) + 1
        } else {
            return 0
        }
    }

    let resArr = []


    for (let i = 0; i < m; i++) {
        resArr.push(dfs([i, 0]))
    }

    return Math.max.apply(null, resArr)


}

//广度优先:超时
var maxMoves2 = function (grid) {

    const m = grid.length
    const n = grid[0].length

    const queue = []



    for (let i = 0; i < m; i++) {
        queue.push([i, 0])
    }

    let res = -1

    while (queue.length != 0) {
        let size = queue.length
        res++
        console.log(queue)
        console.log(size)
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            console.log('cur', cur)
            let curRow = cur[0]
            let curCol = cur[1]
            let curVal = grid[curRow][curCol]

            if (curRow - 1 >= 0 && curCol + 1 < n && grid[curRow - 1][curCol + 1] > curVal) {
                queue.push([curRow - 1, curCol + 1])
            }
            if (curRow >= 0 && curCol + 1 < n && grid[curRow][curCol + 1] > curVal) {
                queue.push([curRow, curCol + 1])
            }
            if (curRow + 1 < m && curCol + 1 < n && grid[curRow + 1][curCol + 1] > curVal) {
                queue.push([curRow + 1, curCol + 1])
            }

        }
    }
    return res

}


var maxMoves = function (grid) {
    const m = grid.length, n = grid[0].length

    let q = new Set() //存放当前列有哪些结点可以继续遍历

    for (let i = 0; i < m; i++) {
        q.add(i)
    }

    console.log(q)

    for (let j = 1; j < n; j++) {
        const q2 = new Set()

        for (const i of q) {
            for (let i2 = i - 1; i2 <= i + 1; i2++) {
                if (0 <= i2 && i2 < m && grid[i][j - 1] < grid[i2][j]) {
                    q2.add(i2)
                }
            }
        }
        q = q2  //进入下一个列
        //若下一列的可便利节点的长度为0，则停止遍历
        if (q.size === 0) {
            return j - 1
        }
    }
    return n - 1
}



let grid = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]
console.log(maxMoves(grid))