
var permute=function(nums){
    let track=[];
    let res=new Array()
  

    var backtrack=function(nums,track){
       
        if(track.length===nums.length){
            console.log(track)
            //不能直接推进数组；
            res.push(track);
            //res.push(track.join(''));
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(track.indexOf(nums[i])!==-1){
                continue;
            }
            track.push(nums[i]);
            backtrack(nums,track);
            track.pop();
        }
    }

    backtrack(nums,track);

    return res;
}

console.log("res:",permute([1,2,3,4]))