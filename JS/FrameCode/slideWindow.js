var slidingWindow=function(s,t){
    var need=new Map();
    var window=new Map();

    for(let i=0;i<t.length;i++){
        need.set(t[i],need.has(t[i])?need.get(t[i])+1:1);
    }

    var left=0;
    var right=0;
    var valid=0;

    while(right<s.length){
        //c是移入窗口内的字符；
        var c=s[right];
        //右移窗口
        right++;
        //进行数据更新

        //debug位置；
        console.log("Debug info");

        //判断左边是否需要收缩
        while(window needs shrink){
            //d是即将移出窗口的字符
            var d=s[left];
            //左移窗口
            left++;
            //进行窗口内的数据更新；
            ...
        }

    }
}

