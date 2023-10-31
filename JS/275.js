/**
 * @param {number[]} citations
 * @return {number}
 */
//统计高于citations[i]的各项数量
// 由于数组 citations\textit{citations}citations 已经按照升序排序，因此可以使用二分查找。
// 设查找范围的初始左边界 left\textit{left}left 为 000, 初始右边界 right\textit{right}right 为 n−1n-1n−1，其中 nnn 为数组 citations\textit{citations}citations 的长度。每次在查找范围内取中点 mid\textit{mid}mid，则有 n−midn-\textit{mid}n−mid 篇论文被引用了至少 citations[mid]\textit{citations}[\textit{mid}]citations[mid] 次。如果在查找过程中满足 citations[mid]≥n−mid\textit{citations}[\textit{mid}] \ge n - \textit{mid}citations[mid]≥n−mid，则移动右边界 right\textit{right}right，否则移动左边界 left\textit{left}left。

var hIndex = function (citations) {
  const n = citations.length
  let left = 0, right = n - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (citations[mid] >= n - mid) {
      right = mid - 1
    } else {
      left = mid + 1
    }


  }
  return n - left
}