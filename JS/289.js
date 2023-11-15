/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length
  const n = board[0].length

  const status = new Array(m).fill().map((item) => {
    return new Array(n).fill(0)
  })

  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      let count=0
      if(i-1>=0){
        
      }
    }
  }


}