/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//54.62 55.24
var checkInclusion = function(s1, s2) {
    var need=new Map();
    var req=new Map();

    for(let c of s1){
        need.set(c,need.has(c)?need.get(c)+1:1);
        req.set(c,req.has(c)?req.get(c)+1:1);
    }
    console.log("need",need)

    var left=0;
    var right=0;
    var valid=need.size;
    let res='';

    while(right<s2.length){
        var c=s2[right];
     

        if(need.has(c)){
            need.set(c,need.get(c)-1);
            if(need.get(c)===0){
                valid-=1;
            }
        }
      
        while(valid===0){
            let newRes=s2.substring(left,right+1);
            let d=s2[left];
           
            if(!res || newRes.length<res.length){
                res=newRes;
            }

            if(need.has(d)){
                need.set(d,need.get(d)+1);
                if(need.get(d)===1){
                    valid+=1;
                }
            }
            left++;
        }
        right++;
    }

    //比较两个Map的函数，如果需要的和最短res相同则返回true；
    var compareMaps=function(map1, map2) {
        console.log(map1,map2);
        var testVal;
        if (map1.size !== map2.size) {
            return false;
        }
        for (var [key, val] of map1) {
            testVal = map2.get(key);
            // in cases of an undefined value, make sure the key
            // actually exists on the object so there are no false positives
            if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                return false;
            }
        }
        return true;
    }

    console.log(res);
    let cur=new Map();
 
    for(let item of res){
        cur.set(item,cur.has(item)?cur.get(item)+1:1);
    }
    console.log("need",need)
    console.log("cur",cur)


    return compareMaps(cur,req);
};


var s1="ab";
var s2="eidbaooo";

console.log(checkInclusion(s1,s2));