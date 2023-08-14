//二维形式的LIS
var maxEnvelop = function (envelopes) {
  const n = envelopes.length
  newArray = envelopes.sort(function (a, b) {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })

  console.log(newArray)
  let height = new Array(n).fill()
  for (let i = 0; i < n; i++) {
    height[i] = newArray[i][1]
  }
  console.log(height)

  const lengthOfLIS = function (nums) {
    var dp = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
    }

    var res = 0
    for (let i = 0; i < dp.length; i++) {
      res = Math.max(res, dp[i])
    }

    return res
  }


  return lengthOfLIS(height)
}

let envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]]
console.log(maxEnvelop(envelopes))


var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0
  }

  const n = envelopes.length
  envelopes.sort((e1, e2) => {
    if (e1[0] - e2[0]) {
      return e1[0] - e2[0]
    } else {
      return e2[1] - e1[1]
    }
  })

  const f = [envelopes[0][1]]
  for (let i = 1; i < n; ++i) {
    const num = envelopes[i][1]
    if (num > f[f.length - 1]) {
      f.push(num)
    } else {
      const index = binarySearch(f, num)
      f[index] = num
    }
  }
  return f.length
}

const binarySearch = (f, target) => {
  let low = 0, high = f.length - 1
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (f[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/russian-doll-envelopes/solutions/633231/e-luo-si-tao-wa-xin-feng-wen-ti-by-leetc-wj68/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。