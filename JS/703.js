//解法一、使用自带的排序，插入一次排序一次，效率很垃圾，双向击6%

/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k=k;
    this.nums=nums;
    this.length=nums.length;
};  

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort(function(a, b){return a-b});
    this.length=this.length+1;
    return this.nums[this.length-this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//解法二、优化插入排序算法: 双向击败28%
/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k=k;
    this.nums=nums.sort(function(a,b) {return a-b});
    this.length=nums.length;
};  

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    console.log(this.nums);
    InsertSort(this.nums,val);
    this.length=this.length+1;
    return this.nums[this.length-this.k];
};

var InsertSort=function(arr,insertNum){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>insertNum){
            for(let j=arr.length;j>i;j--){
                arr[j]=arr[j-1];
            }
            arr[i]=insertNum;
            return;
        }
    }
    arr.push(insertNum)
}

//解法三、优化初始排序算法: 双向击败 %,提交不通过，哈哈哈哈
//还是得自己写快排
/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k=k;
    this.nums=quickSortIterative(nums);
    this.length=nums.length;
};  

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    console.log(this.nums);
    InsertSort(this.nums,val);
    this.length=this.length+1;
    return this.nums[this.length-this.k];
};

var InsertSort=function(arr,insertNum){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>insertNum){
            for(let j=arr.length;j>i;j--){
                arr[j]=arr[j-1];
            }
            arr[i]=insertNum;
            return;
        }
    }
    arr.push(insertNum)
}

//快速排序算法
var partition=function(arr, start, end){
    // 以最后一个元素为基准
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // 交换元素
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // 移动到下一个元素
        pivotIndex++;
        }
    }
    
    // 把基准值放在中间
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

var quickSortRecursive=function(arr, start, end) {
    // 终止条件
    if (start >= end) {
        return;
    }
    
    // 返回 pivotIndex
    let index = partition(arr, start, end);
    
    // 将相同的逻辑递归地用于左右子数组
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

var quickSortIterative=function(arr) {
    // 用push()和pop()函数创建一个将作为栈使用的数组
    stack = [];
    
    // 将整个初始数组做为“未排序的子数组”
     while(stack[stack.length - 1] >= 0){
        
        // 提取顶部未排序的子数组
        end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partition(arr, start, end);
        
        // 如果基准的左侧有未排序的元素，
        // 则将该子数组添加到栈中，以便稍后对其进行排序
        if (pivotIndex - 1 > start){
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        
        // 如果基准的右侧有未排序的元素，
        // 则将该子数组添加到栈中，以便稍后对其进行排序
        if (pivotIndex + 1 < end){
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
} stack.push(0);
    stack.push(arr.length - 1);
    
    // 没有显式的peek()函数
    // 只要存在未排序的子数组，就重复循环
  