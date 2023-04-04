var dropEggs=function(k,n){
    var memo=new Map();

    var dp=function(k,n){
        if(k==1){
            return n;
        }
        if(n==0){
            return 0;
        }

        if(memo.has([k,n])){
            return memo.get([k,n]);
        }
        res=Infinity;

        for(let i=1;i<=n+1;i++){
            res=Math.min(res,Math.max(dp(k,n-i),dp(k-1,i-1)+1));
        }
        memo.set([k,n],res);
        return res;
    }
  
    return dp(k,n);
}

console.log(dropEggs(3,10))