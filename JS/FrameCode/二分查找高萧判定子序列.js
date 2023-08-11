var isSubString = function (s, t) {
  let m = s.length, n = t.length

  let index = {}

  for (let i = 0; i < n; i++) {
    let c = t[i]
    if (index[c] == null) {
      index[c] = new Array().fill()
    }
    index[c].push(i)
  }

  const left_bound = function (arr, tar) {
    let l = 0, r = arr.length
    while (l < r) {
      let mid = Math.floor(l + (r - l) / 2)
      if (tar > arr[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }

  let j = 0
  for (let i = 0; i < m; i++) {
    let c = s[i]
    if (index[c] == null) {
      return false
    }
    let pos = left_bound(index[c], j)
    if (pos == index[c].length) return false
    j = index[c][pos] + 1
  }

  return true
}

let s = "abc"
let t = "cacbhbc"
console.log(isSubString(s, t))