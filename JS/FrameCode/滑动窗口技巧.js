//最小覆盖子串
//10.45 22.93
var minWindow = function (s, t) {
  let start = 0, minLen = Number.MAX_SAFE_INTEGER
  let left = 0, right = 0

  let window = {}
  let needs = {}

  for (const c of t) {
    needs[c] = (needs[c] || 0) + 1
  }

  let match = 0
  while (right < s.length) {
    let c1 = s[right++]
    if (needs[c1]) {
      window[c1] = (window[c1] || 0) + 1
      if (window[c1] == needs[c1]) {
        match++
      }
    }
    //Notice
    while (match == Object.keys(needs).length) {
      if (right - left < minLen) {
        start = left
        minLen = right - left
      }
      let c2 = s[left++]
      if (window[c2]-- == needs[c2]) {
        match--
      }
    }
  }

  return minLen < Number.MAX_SAFE_INTEGER ? s.substring(start, start + minLen) : ""
}


//最小覆盖子串
//85.87 66.01
var minWindow = function (s, t) {
  let start = 0, minLen = Number.MAX_SAFE_INTEGER
  let left = 0, right = 0
  let window = {}
  let needs = {}
  let len=s.length
  for (const c of t) {
    needs[c] = (needs[c] || 0) + 1
  }

  let needsLength=  Object.keys(needs).length

  let match = 0
  while (right <len) {
    let c1 = s[right++]
    if (needs[c1]) {
      window[c1] = (window[c1] || 0) + 1
      if (window[c1] == needs[c1]) {
        match++
      }
    }
    //Notice
    while (match == needsLength) {
      if (right - left < minLen) {
        start = left
        minLen = right - left
      }
      let c2 = s[left++]
      if (window[c2]-- == needs[c2]) {
        match--
      }
    }
  }

  return minLen < Number.MAX_SAFE_INTEGER ? s.substring(start, start + minLen) : ""
}


S = "ADOBECODEBANC"
T = "ABC"
console.log("res:", minWindow(S, T))

