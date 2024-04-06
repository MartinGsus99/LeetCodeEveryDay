/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//先插入，再排序，再合并
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    const n = intervals.length
    let prev = intervals[0]
    let res=[]
    for (let i = 1; i < n; i++){
        let cur=intervals[i]

        if(prev[1]>=cur[0]){
            prev[1]=Matn.max(prev[1],cur[1])
        }else{
            res.push(prev)
            prev=cur
        }
    }
    res.push(prev)
    return res
}