/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays1 = function (n, relation, k) {

    var dp = [];

    let path = "0->"

    var traverse = function (path, relation, restTime, current) {
        console.log("Path:",path,"Current:",current,"Times:",restTime);
        //达到剩余的次数了,且处于终点，加入dp；
        if (restTime == 0 ) {
            return;
        }

        //从所有关系中找到与当前结点有关的，进行深层的遍历；
        for (let i = 0; i < relation.length; i++) {
            if (relation[i][0] == current) {
                if (restTime-1 == 0) {
                    path = path + relation[i][1];
                    dp.push(path);
                    console.log("Push to DP,遍历结束~");
                    return;
                } else {
                    path = path + relation[i][1] + "->";
                    current = relation[i][1];
                    traverse(path, relation, restTime - 1, current);
                }
            }
        }
        return;

    };

    traverse(path, relation, k, 0);
    console.log(dp);
    return dp.length;
};

/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
//广度优先算法;
var numWays = function(n, relation, k) {
    let ways = 0;
    const edges = new Array(n).fill(0).map(() => new Array());

    for (const [src, dst] of relation) {
        edges[src].push(dst);
    }

    const dfs = (index, steps) => {
        if (steps === k) {
            if (index === n - 1) {
                ways++;
            }
            return;
        }
        const list = edges[index];
        for (const nextIndex of list) {
            dfs(nextIndex, steps + 1);
        }
    }
    
    dfs(0, 0);
    return ways;
}


n = 5, relation = [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], k = 3
console.log("Total:",numWays(n, relation, k))

