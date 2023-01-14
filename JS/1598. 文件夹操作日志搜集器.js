/**
 * @param {string[]} logs
 * @return {number}
 */


//解题思路：为每一个操作赋值，比如新打开一个文件夹就是+1；'../'需要判断，如果当前总值为0，则+0，否则减一；'./'代表不动，+0；
 var minOperations = function(logs) {
    console.log(logs);
    let depth=0;

    for(let log of logs)
    {
        console.log(log);
        if(log=='./')
        {
            console.log('+0')
            depth=depth+0;
        }else if(log=='../')
        {
            if(depth>0)
            {
                console.log('-1')
                depth=depth-1;
            }else
            {
                console.log('+0')
                depth=depth+0;
            }
        }else
        {
            console.log('+1')
            depth=depth+1;
        }
    }
    console.log(depth);
    return depth
};


logs = ["d1/","d2/","../","d21/","./"]
logs = ["d1/","../","../","../"]
minOperations(logs);