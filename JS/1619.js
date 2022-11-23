// 1619. 删除某些元素后的数组均值
// 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
// 与 标准答案 误差在 10-5 的结果都被视为正确结果。

/**
 * @param {number[]} arr
 * @return {number}
 */


//朴实无华排序求和求均值；
 var trimMean = function(arr) {
    var arr_sort=arr.sort(
        function(a,b){
            return a-b;
        }
    );
    let removeLength=Math.trunc(arr.length*0.05);
    arr_sort=arr_sort.splice(removeLength,arr_sort.length);
    arr_sort=arr_sort.splice(0,arr_sort.length-removeLength);
    var sum=0;
    for(let i=0;i<arr_sort.length;i++)
    {
        sum+=arr_sort[i];
    }
    return sum/arr_sort.length;
};

//官方解法
var trimMean = function(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let partialSum = 0;
    for (let i = n / 20; i < 19 * n / 20; i++) {            //优化此处不用新建变量；
        partialSum += arr[i];
    }
    return partialSum / (n * 0.9);
};

