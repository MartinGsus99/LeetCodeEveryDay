//假设盘子上有n块面积大小不一的烧饼，如何用一把锅铲进行若干次翻转，使得烧饼大小有序
//每次只能翻转最上面的烧饼
//以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。
//任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。
/**
 * @param {number[]} arr
 * @return {number[]}
 */
//85.45 70.91
var pancakeSort = function (arr) {
  let res = []
  const sort = function (cakes, n) {
    if (n == 1) {
      return
    }

    let maxCake = 0
    let maxCakeIndex = 0
    for (let i = 0; i < n; i++) {
      if (cakes[i] > maxCake) {
        maxCakeIndex = i
        maxCake = cakes[i]
      }
    }
    reverse(cakes, 0, maxCakeIndex)
    res.push(maxCakeIndex + 1)
    reverse(cakes, 0, n - 1)
    res.push(n)
    console.log(cakes)
    sort(cakes, n - 1)

  }

  const reverse = function (arr, i, j) {
    while (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  sort(arr, arr.length)
  console.log(cakes)
  return res
}

let cakes = [3, 2, 4, 1]

console.log(pancakeSort(cakes))