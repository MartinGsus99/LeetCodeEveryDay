/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
//使用set会遇到性能问题，可以尝试使用数组标记访问；
var validPath = function(n, edges, source, destination) {

    var visited=new Set();
    var queue=new Array();
    if(edges.length==0){
        return true;
    }

    queue.push(source);

    while(queue.length!=0){
        let size=queue.length;
       
        for(let i=0;i<size;i++){
            let cur=queue.shift();
            if(visited.has(cur)){
                continue;
            }
            visited.add(cur);
            if(cur[0]==destination){
                console.log("到达终点！");
                return true;
            }
            for(j=0;j<edges.length;j++){
                //因为是双向边
                if(edges[j][0]==cur && !visited.has(edges[j][1])){
                    console.log("加入路径：",edges[j]);
                    queue.push(edges[j][1]);
                }
                if(edges[j][1]==cur && !visited.has(edges[j][0])){
                    console.log("加入路径：",edges[j]);
                    queue.push(edges[j][0]);
                }
            }
        }
    }
    return false;

};

//官方解法
var validPath = function(n, edges, source, destination) {
    const adj = new Array(n).fill(0).map(() => new Array());
    for (const edge of edges) {
        const x = edge[0], y = edge[1];
        adj[x].push(y);
        adj[y].push(x);
    }
    const visited = new Array(n).fill(false);
    const queue = [source];
    visited[source] = true;
    while (queue.length) {
        const vertex = queue.shift();
        if (vertex === destination) {
            break;
        }
        for (const next of adj[vertex]) {
            if (!visited[next]) {
                queue.push(next);
                visited[next] = true;
            }
        }
    }
    return visited[destination];
};

