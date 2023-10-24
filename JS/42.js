/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length
  if (n === 0) {
    return 0
  }

  let LIndex = 0
  let RIndex = n - 1
  let LMAX = height[0]
  let RMAX = height[n - 1]
  let res = 0
  while (LIndex < RIndex) {
    LMAX = Math.max(LMAX, height[LIndex])
    RMAX = Math.max(RMAX, height[RIndex])

    if (LMAX < RMAX) {
      res += LMAX - height[LIndex]
      LIndex++
    } else {
      res += RMAX - height[RIndex]
      RIndex--
    }
  }

  return res

}