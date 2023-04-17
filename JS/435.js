/**
 * @param {number[][]} intervals
 * @return {number}
 */
//38.54 73.36
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length == 0) {
    return 0
  }

  let count = 1

  intervals.sort(function (a, b) {
    return a[1] - b[1]
  })

  let x_end = intervals[0][1]

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0]
    if (start >= x_end) {
      count++
      x_end = intervals[i][1]
    }
  }

  return intervals.length - count
}

let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
let intervals1 = [[1, 100], [11, 22], [1, 11], [2, 12]]
console.log(eraseOverlapIntervals(intervals1))