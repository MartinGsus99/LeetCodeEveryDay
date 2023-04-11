/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {

    var piecesMap=new Map();

    for(let i=0;i<pieces.length;i++){
        for(let j=0;j<pieces[i].length;j++){
            piecesMap.set(pieces[i][j],[i,j]);
        }
    }

    console.log(piecesMap);
    for(let i=0;i<arr.length;i++){
        
    }

};


var arr = [91,4,64,78];
var pieces = [[78],[4,64],[91]]
console.log(canFormArray(arr,pieces));