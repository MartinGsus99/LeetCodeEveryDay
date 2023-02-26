/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    var a=0;
    var b=1;
    var c=1
    var d;

    if(n==0){
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    if(n==2){
        return 1;
    }

    for(let i=3;i<=n;i++)
    {
        d=a+b+c;
        a=b;
        b=c;
        c=d;
    }

    return d;
};