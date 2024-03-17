/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length

    let i = 0

    while (i < n) {
        let sumOfGas = 0, sumOfCost = 0
        let count = 0
        while (count < n) {
            const j = (i + count) % n
            sumOfGas += gas[j]
            sumOfCost += cost[j]
            if (sumOfGas < sumOfCost) {
                break
            }
            count++
        }
        if (count === n) {
            return i
        } else {
            i = i + count + 1
        }
    }
    return -1
}

//图像解法：将站点和其相连的路看作整体，
//则新数组：arr[i]=gas[i]-cost[i]
//形成变化的折线图，取最低点作为起点
int canCompleteCircuit(int[] gas, int[] cost) {
    let n = gas.length
    let sum = 0, minSum = 0
    let start = 0

    for (let i = 0; i < n; i++) {
        sum += gas[i] - cost[i]
        if (sum < minSum) {
            start = i + 1
            minSum = sum
        }
    }

    if (sum < 0) {
        return -1
    }

    return statrt == n ? 0 : start
}
