/**
 * @param {string} s
 * @return {number}
 */
//78.35 26.80
var maxLengthBetweenEqualCharacters = function(s) {
    var dict=new Map();

    var max=0;
    for(let i=0;i<s.length;i++){
        if(!dict.has(s[i])){
            dict.set(s[i],i);
        }else{
            if(i-dict.get(s[i])>max){
                max=i-dict.get(s[i]);
            }
        }
    }
    console.log(dict)
    return max-1
};

var s="aaa"

console.log(maxLengthBetweenEqualCharacters(s));