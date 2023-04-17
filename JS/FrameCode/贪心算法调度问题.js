//贪心算法可以认为是动态规划算法的一个特例
//相比动态规划，贪心算法需要满足更多的条件，但是效率比dp高，贪心算法可以达到线性复杂度级别
//贪心选择性质：每一步都做出一个局部最优选择，最终结果就是最优的；特殊性质，并不通用；

var intervalSchedule = function (intvals) {
  if (intvals.length == 0) {
    return 0
  }

  intvals.sort(function (a, b) {
    return a[1] - b[1]
  })

  console.log(intvals)

  let count = 1

  let x_end = intvals[0][1]
  for (let i = 0; i < intvals.length; i++) {
    let start = intvals[i][0]
    if (start >= x_end) {
      count++
      x_end = intvals[i][1]
    }
  }

  return count
}

let intervals = [[1, 3], [2, 4], [3, 6]]
console.log(intervalSchedule(intervals))