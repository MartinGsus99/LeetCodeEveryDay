var nextGreaterNum = function (nums) {
    let result = [];              //结果数组
    let stack = [];               //栈

    for (let i = nums.length - 1; i >= 0; i--) {             
        while (stack.length != 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        result[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i]);
    }
    return result;
}

// var nums=[2,1,2,4,3];
// console.log(nextGreaterNum(nums));

//循环数组
var circleArrayNextGreaterNum = function (nums) {
    let length = nums.length;
    let result = [];
    let stack = [];

    for (let i = 2 * length - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1] <= nums[i % length]) {
            stack.pop();
        }
        result[i % length] = stack.length == 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i % length]);
    }
    return result;
}

var nums = [2, 1, 2, 4, 3];
console.log(circleArrayNextGreaterNum(nums));