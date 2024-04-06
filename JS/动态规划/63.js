/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = new Array(m).fill().map(() => new Array(n).fill(0))

    if (obstacleGrid[0][0] === 1) {
        return 0
    }



    dp[0][0] = 1

    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] !== 1) {
            dp[i][0] = 1
        } else {
            break
        }
    }

    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] !== 1) {
            dp[0][j] = 1
        } else {
            break
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] !== 1) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            } else {
                dp[i][j] = 0
            }
        }
    }
    return dp[m - 1][n - 1]
}