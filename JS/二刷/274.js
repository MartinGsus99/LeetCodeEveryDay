/**
 * @param {number[]} citations
 * @return {number}
 */

//排序
var hIndex = function (citations) {
    citations.sort((a, b) => a - b)

    let h = 0, i = citations.length - 1

    while (i >= 0 && citations[i] > h) {
        h++
        i--
    }
    return h
}

//计数排序

var hIndex = function (citations) {
    let n = citations.length, total = 0

    const statistic = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            statistic[n]++
        } else {
            statistic[citations[i]]++
        }
    }

    for (let i = n; i >= 0; i--) {
        total += statistic[i]
        if (total >= i) {
            return i
        }
    }
    return 0
}

//二分查找
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let left = 0, right = citations.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0

        for (let v of citations) {
            if (v >= mid) {
                count += 1
            }
        }

        if (count >= mid) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
}
