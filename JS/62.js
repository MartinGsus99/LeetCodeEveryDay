/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//该版本能够计算出正确的数量，但是会超时
// var uniquePaths = function (m, n) {
//     var res = 0;

//     var backtrack = function ( x, y) {
//         if (x == m - 1 && y == n - 1) {
//             res=res+1;
//             return;
//         } else if (x == m - 1 && y != n - 1) {
//             backtrack(x,y+1);
//         } else if (x != m - 1 && y == n - 1) {
//             backtrack(x+1,y);
//         } else {
//             x=x+1;
//             backtrack(x,y);
//             x=x-1;
//             y=y+1;
//             backtrack(x,y);
//             y=y-1
//         }
//     }

//     backtrack(0,0);
//     return res;
// };

//使用备忘录  25.90 19.71
var uniquePaths = function (m, n) {
    var res=new Array(m).fill(new Array(n).fill(0));
    console.log(res);
    //base case
    for(let i=0;i<m;i++){
        res[0][i]=1;
    }

    for(let i=0;i<n;i++){
        res[i][0]=1;
    }
    console.log("res",res)

    for(let i=1;i<m;i++){
        for(j=1;j<n;j++){
            res[i][j]=res[i-1][j]+res[i][j-1];
        }
    }
    console.log("res",res)
    return res[m-1][n-1];
};

//优化版本，只需要记录两个数字就行；


console.log(uniquePaths(3,3));