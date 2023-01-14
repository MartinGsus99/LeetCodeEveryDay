/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

//  给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

//  注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 
//  来源：力扣（LeetCode）
//  链接：https://leetcode.cn/problems/duplicate-zeros
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//解法：遍历然后使用一个maxLength控制数组;


var duplicateZeros = function(arr) {
    let maxLength=arr.length;
    console.log(arr);
    for(let i=0;i<maxLength;i++)
    {
        if(arr[i]==0)
        {
            for(let j=arr.length-1;j>i+1;j--)
            {
                arr[j]=arr[j-1];
            }
            if(i+1<maxLength){
                arr[i+1]=0;
                i+=2;
            }else
            {
                return arr;
            }
        }
        console.log(arr);
    }
    return arr;
};
arr1 = [1,0,2,3,0,4,5,0]
arr = [0,0,0,0,0,0,0];
arr2=[0,4,1,0,0,8,0,0,3];

console.log(duplicateZeros(arr2));