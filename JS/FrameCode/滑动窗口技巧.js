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
  let len = s.length
  for (const c of t) {
    needs[c] = (needs[c] || 0) + 1
  }

  let needsLength = Object.keys(needs).length

  let match = 0
  while (right < len) {
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

// S = "ADOBECODEBANC"
// T = "ABC"
// console.log("res:", minWindow(S, T))

//找到字符串中所有字母异味词
//给定一个字符串s和一个非空字符串p，找到s中所有是p的字母移位词的子串，返回这些子窜的其实索引
var findAnagrams = function (s, p) {
  let needs = {}
  for (let c of p) {
    needs[c] = (needs[c] || 0) + 1
  }
  let left = 0, right = 0
  let s_len = s.length
  let p_len = p.length
  let valid = 0
  let window = {}
  let needsLength = Object.keys(needs).length
  let res = []

  while (right < s_len) {
    let c = s[right++]
    window[c] = (window[c] || 0) + 1
    if (window[c] === needs[c]) {
      valid++
    }
    while (valid == needsLength) {
      if (right - left === p_len) {
        res.push(left)
      }
      let c = s[left++]
      if (needs[c]) {
        window[c]--
        if (window[c] < needs[c]) {
          valid--
        }
      }
    }
  }
  return res
}

let s = "cbaebabacd"
let p = "abc"
console.log(findAnagrams(s, p))


//总结框架
while (right < leng) {
  window.add(s[right])
  right++

  while (valid) {
    window.remove(s[left])
    left++
  }
}