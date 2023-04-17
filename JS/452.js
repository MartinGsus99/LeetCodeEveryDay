/**
 * @param {number[][]} points
 * @return {number}
 */
//75.48 71.96
var findMinArrowShots = function (points) {
  if (points.length == 0) {
    return 0
  }

  let count = 1

  points.sort(function (a, b) {
    return a[1] - b[1]
  })

  let x_end = points[0][1]

  for (let i = 0; i < points.length; i++) {
    let start = points[i][0]

    if (start > x_end) {
      count++
      x_end = points[i][1]
    }
  }
  return count
}

let points = [[10, 16], [2, 8], [1, 6], [7, 12]]
console.log(findMinArrowShots(points))