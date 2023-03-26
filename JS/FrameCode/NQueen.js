var nQueen = function (n) {
    var res = [];
    var board = new Array(n).fill(new Array(n).fill('.'));

    var isValid = function (board, row, col) {
        let n = board.length;

        //检查列
        for (let i = 0; i < n; i++) {
            if (board[i][col] == 'Q') {
                return false;
            }
        }

        //检查右上方有无冲突；
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') { return false }
        }

        //检查左上方
        for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j++){
            if(board[i][j]=='Q'){
                return false;
            }
        }

        return true;
    }

    var backtrack = function (board, row) {
        if (row == board.length) {
            res.push(board);
            console.log(board);
            return;
        }

        let n = board[row].length;
        for (let col = 0; col < n; col++) {
            if (!isValid(board, row, col)) {
                continue;
            }
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            board[row][col] = '.'
        }
    }

    backtrack(board,0);
    console.log(res);
    return res;
}

nQueen(8);