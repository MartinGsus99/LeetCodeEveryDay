// 1346. 检查整数及其两倍数是否存在
// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 更正式地，检查是否存在两个下标 i 和 j 满足：

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    arr_sort = arr.sort(function(a,b){
        return a-b;
    });

    for(let flag=0;flag<arr_sort.length;flag++)
    {
        if(arr_sort[flag]>=0)
        {
            break;
        }
        return arr_sort.length-1;
    }


    while (left < right) {
        console.log(arr[left],'*2 ',arr[right])
        if (arr[left] * 2 < arr[right]) {
            left++;
        } else if (arr[left] * 2 == arr[right]) {
            return true;
        } else if (arr[left] * 2 > arr[right]) {
            right--;
        }
    }
    return false;
};

console.log(checkIfExist([-20,8,-6,-14,0,-19,14,4]));