/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//广度优先搜索
//30.42 10.41

var openLock=function(deadends,target){
    var plus=function(password,pos){
        password=password.split('');
        if(password[pos]=='9'){
            password[pos]='0';
        }else{
            password[pos]=parseInt(password[pos])+1; 
        }
        return password.join('');
    }

    var minus=function(password,pos){
        password=password.split('');
        if(password[pos]=='0'){
            password[pos]='9';
        }else{
            password[pos]=parseInt(password[pos])-1;
        }
        return password.join('');
    }
    var visited=new Set();
    for(deadend of deadends){
        visited.add(deadend);
    }

    var BFSTraverse=function(target){
        let queue=new Array();
        queue.push("0000");
        var step=0;
        while(queue.length!=0){
            let size=queue.length;

            for(let i=0;i<size;i++){
                let cur=queue.shift();
                if(visited.has(cur)){
                    continue;
                }
                if(cur==target){
                    return step;
                }
                visited.add(cur);
                for(let j=0;j<4;j++){
                    let up=plus(cur,j);
                    let down=minus(cur,j);
                    queue.push(up);
                    queue.push(down);
                }
            }
            step=step+1;
        }
        return -1;
    }

    return BFSTraverse(target);
}

//双向BFS
