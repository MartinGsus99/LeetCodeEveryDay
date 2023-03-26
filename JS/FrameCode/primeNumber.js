var countPrimies = function (n) {
    var isPrim=new Array(n).fill(true);

    for(let i=2;i*i<n;i++){
        if(isPrim[i]){
            for(let j=i*i;j<n;j+=i){
                isPrim[j]=false;
            }
        }
    }

    var count=0;
    for(let i=2;i<n;i++){
        if(isPrim[i]){
            count++;
        }
    }
    return count;
}

countPrimies(100)