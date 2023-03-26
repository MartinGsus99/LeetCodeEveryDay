//给定一个字符串S一个字符串DT，请在S里超出包含T所有字母的最小子窜；
//滑动窗口思想：
//1.不断增加扩大窗口right++，直到窗口中的字符包含所有T中的字符；
//2.满足1之后，开始缩小窗口，left++,直到不再符合要求；
//3.每次增加left需要更新结果；
//4.重复2、3知道right到达字符串的尽头；

//Code
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let right = 0;
    const need = new Map();
    // 确定所要获取的各个字符的个数
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1);     //如果need中有c，就把c的值加一，否则就是1
    }
    // 需要的类型数量等于字典长度
    let needTypeCount = need.size;
    // 定义一个要返回的字符串
    let res = '';
    while (right < s.length) { 
        // 获取右指针当前字符
        const c = s[r];
        // 判断是否是需要的字符，如果是，那就让需要的字符减一
        if (need.has(c)) {
        //need.get(c)变成负数的话就说明子串中多富裕几个字符，在移动左指针的时候加回来就可以
            need.set(c,need.get(c) - 1); 
            // 如果当前需要的字符数量等于0，那就让当前需要类型数量减一
            if (need.get(c) === 0) needTypeCount -= 1;
        }
        //如果需要的字符类型数量都等于0了，就说明满足题目要求的全部字符都出现了
        while (needTypeCount === 0) {
            //subStirng是左开右闭的,所以是r+1
            const newRes = s.substring(left, right + 1);
            //如果刚开始res是空字符串，就先给他赋值为newRes 
            if (!res || newRes.length < res.length) res = newRes;
            // 温饱满足了，尝试奔小康，尝试减少字符串的长度，
            const c2 = s[left];
            // 如果当前左指针指向的是需要的字符，因为我们要尝试缩短字符串长度，移动左指针
            // 所以设置需要当前这个字符数的数量加一
            if (need.has(c2)) {
                need.set(c2,need.get(c2) + 1);
                //如果需要的字符数等于 1 说明子串不满足包含所有字母种类了 needTypeCount+1
                if (need.get(c2) === 1) needTypeCount += 1;
            }
            left += 1; 
        }
        right += 1;
    }
    return res;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var need = new Map();   //存放需要的字符 

    for(let item of t){
        need.set(item,need.has(item)?need.get(item)+1:1);
    }
    var left=0;
    var right=0;
    var valid=need.size;
      console.log(need)
    let res = '';
    while(right<s.length){
        let c=s[right];
    
        if(need.has(c)){
            need.set(c,need.get(c)-1);
            if(need.get(c)===0){
                valid-=1;
            }
        }

        while(valid==0){
            const newRes=s.substring(left,right+1);

            if(!res || newRes.length<res.length ) res=newRes;

            const d=s[left];
        
            if(need.has(d)){
                need.set(d,need.get(d)+1);
                if(need.get(d)===1){
                    valid+=1;
                }
            }
            left+=1;
        }
         right+=1;
    }
    return res;
};

var s="ADOBECODEBANC";
var t="ABC";


console.log(minWindow1(s,t));