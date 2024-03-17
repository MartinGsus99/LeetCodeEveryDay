/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const n=numbers.length-1

    let left=0,right=n

    while(left<right){
        if(numbers[left]+numbers[right]>target){
            right--
        }else if(numbers[left]+numbers[right]<target){
            left++
        }else if(numbers[left]+numbers[right]==target){
            return [left+1,right+1]
        }
    }
    
}