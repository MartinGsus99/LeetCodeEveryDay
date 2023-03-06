/**
 * @param {character[][]} grid
 * @return {number}
 */
//广度优先算法，从左上角开始，使用hash表记录访问过的土地；
//只有上下可以加入土地，每次到一个方块将他的上下左右都加入到待访问队列；
//5.56 5.02
var numIslands = function (grid) {

    var visited = new Set();            //存放已经访问的点，注意：考虑到性能问题，直接使用二维数组来标记更快；
    var queue = new Array();            //存放当前结点相邻的结点
    //推入0，0

    var count = 0;                 //记录岛屿数量
    if (grid.length == 0) {
        return count;
    }

    var width = grid.length;            //设置数组x索引上限
    var height = grid[0].length;        //设置数组y索引上限

    var BFS = function (startNode) {

        queue.push(startNode);

        while (queue.length != 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let cur = queue.shift();
                console.log('set', visited);
                if (!visited.has(cur.toString())) {
                    visited.add(cur.toString());
                    console.log("当前结点：", cur);
                    let x = cur[0];
                    let y = cur[1];
                    //当前访问结点

                    //检查周围的点,第一检查数组是否越界，第二判断是否为1，第三是否访问过；
                    if (x + 1 < width && grid[x + 1][y] == '1') {
                        if (!visited.has([x + 1, y].toString())) {
                            queue.push([x + 1, y])
                            console.log("压入结点1", [x + 1, y]);
                        }
                    }
                    if (y + 1 < height && grid[x][y + 1] == '1') {
                        if (!visited.has([x, y + 1].toString())) {
                            queue.push([x, y + 1])
                            console.log("压入结点2", [x, y + 1]);
                        }
                    }
                    if (x - 1 >= 0 && grid[x - 1][y] == '1') {
                        if (!visited.has([x - 1, y].toString())) {
                            console.log("访问结点：", [x - 1, y]);
                            queue.push([x - 1, y])
                            console.log("压入结点3", [x - 1, y]);
                        }
                    }
                    if (y -1 >= 0 && grid[x][y - 1] == '1') {
                        if (!visited.has([x, y - 1].toString())) {
                            queue.push([x, y - 1])
                            console.log("压入结点4", [x, y - 1]);
                        }
                    }
                    console.log("当前队列：", queue);
                }
            }
        }
        count += 1;
        console.log("Count:", count);
    }

    //起始点检索条件：1.必须为1 2.起始点没有被访问过,可以优化；
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (!visited.has([i, j].toString()) && grid[i][j] == '1') {
                console.log("开始寻找新的岛屿~");
                BFS([i, j]);
            }
        }
    }

    return count;
};

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

const grid3 = [
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"]]



console.log(numIslands(grid2));
