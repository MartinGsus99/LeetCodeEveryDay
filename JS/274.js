/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length
  let result = []
  for (let i = 0; i < n; i++) {
    let count = 0

    for (let j = 0; j < n; j++) {
      if (citations[j] > i) {
        count++
      }
    }
    if (count > i) {
      result.push(i)
    }
  }
  console.log(result)
  if (result.length === 0) {
    return 0
  }
  return Math.max.apply(null, result) + 1
}