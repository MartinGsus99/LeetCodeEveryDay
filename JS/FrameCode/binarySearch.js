 var binarySearch=function(nums,target){
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid=left+(right-left)/2;
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }
    }
    return -1;
 }

 var leftBound=function(nums,target){
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid=left+(right-left)/2;
        if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }else if(nums[mid]==target){
            right=mid-1;
        }
    }

    if(left>=nums.length || nums[left]!=target){
        return -1;
    }

    return left;
 }

 var rightBound=function(nums,target){
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let mid=left+(right-left)/2;
        if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }else if(nums[mid]==target){
            left=mid+1;
        }
    }
    if(right<0 || nums[right]!=target){
        return -1;
    }
    return right;
 }