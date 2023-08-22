/**
 * @param {number[]} seats
 * @return {number}
 */
//找到最长的连续空座，然后取中间值 29.03 29.032
var maxDistToClosest = function (seats) {
  const n = seats.length
  let leftMax = 0
  let rightMax = 0
  let maxLength = 0
  if (seats[0] === 0) {
    let i = 0
    while (seats[i] === 0) {
      i++
    }
    leftMax = i - 0
  }
  if (seats[n - 1] === 0) {
    let i = n - 1
    while (seats[i] === 0) {
      i--
    }
    rightMax = n - i - 1
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (seats[j] === 1) {
        maxLength = (maxLength > j - i ? maxLength : j - i)
        i = j
      }
    }
  }
  return Math.max(leftMax, rightMax, Math.floor(maxLength / 2))
}

let seats = [1, 0, 0, 0, 1, 0, 1]
let seats1 = [1, 0, 0, 1]
let seats2 = [0, 1]
let seats3 = [1, 0, 0, 0]
let seats4 = [1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
let seats5 = [0, 0, 1]


console.log(maxDistToClosest(seats))
console.log(maxDistToClosest(seats1))
console.log(maxDistToClosest(seats2))
console.log(maxDistToClosest(seats3))
console.log(maxDistToClosest(seats4))
console.log(maxDistToClosest(seats5))