/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const n = rings.length

  let arr = new Array(10)

  for (let i = 0; i < 10; i++) {
    arr[i] = new Array(3)
  }

  rings = rings.split("")

  let res = 0
  console.log(rings, res)
  for (let i = 1; i < n; i += 2) {
    let temp = arr[rings[i]]
    console.log('1', temp)
    if (rings[i - 1] === 'R') {
      temp[0] = 1
    } else if (rings[i - 1] === 'G') {
      temp[1] = 1
    } else if (rings[i - 1] === 'B') {
      temp[2] = 1
    }
    if (temp[0] === 1 && temp[1] === 1 && temp[2] === 1) {
      console.log(temp)
      res += 1
    }
    temp = []
  }
  return res
}

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const poleNum = 10
  const n = rings.length
  const state = new Array(poleNum).fill(0)

  for (let i = 0; i < n; i++) {
    const color = rings[i]
    const poleIndex = rings[i + 1] - '0'
    if (color === 'R') {
      state[poleIndex] |= 1
    } else if (color === 'G') {
      state[poleIndex] |= 2
    } else {
      state[poleIndex] |= 4
    }

  }
  let res = 0
  for (let i = 0; i < poleNum; i++) {
    res += state[i] === 7
  }
  return res

}
let rings = "B0R0G0R9R0B0G0"
console.log(countPoints(rings))