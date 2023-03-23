/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//首先查找每一行的第一个数字，然后再比价对应的列；
//25.53 82.09
var searchMatrix = function(matrix, target) {

    const col1=[];

    for(let i=0;i<matrix.length;i++){
        col1.push(matrix[i][0]);
    }

    const row=matrix.length-1;

    for(let i=0;i<col1.length;i++){
        if(target==col1[i]){
            return true;
        }else if(col1[i]<target && col1[i+1]>target){
            row=i;
        }
    }

    var binarySearch=function(nums,target){
        let left=0;
        let right=nums.length-1;

        while(left<=right){
            const mid=Math.floor(left+(right-left)/2);
            if(nums[mid]==target){
                return true;
            }else if(nums[mid]<target){
                left=mid+1;
            }else if(nums[mid]>target){
                right=mid-1;
            }
        }
        return false;
    }

    return binarySearch(matrix[row],target);

};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
let target = 30;

console.log(searchMatrix(matrix,target));

//官方方法，将二维矩阵拼接成一维矩阵，然后一次二分查找得到；
//98.93 64.84
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const x = matrix[Math.floor(mid / n)][mid % n];
        if (x < target) {
            low = mid + 1;
        } else if (x > target) {
            high = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};

