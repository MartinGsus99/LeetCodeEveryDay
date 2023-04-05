/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//13.33 20.00
var commonFactors1 = function(a, b) {
    var maxNum=Math.min(a,b);

    let res=[];
    for(let i=1;i<=maxNum;i++){
        if(a%i==0 && b%i==0){
            res.push(i);
        }
    }
    return res.length;
};

//51.67 46.67
var commonFactors = function(a, b) {
    var maxNum=Math.min(a,b);

    let count=0;
    for(let i=1;i<=maxNum;i++){
        if(a%i==0 && b%i==0){
            count+=1
        }
    }
    
    return count;
};


console.log(commonFactors(12,6));