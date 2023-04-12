// . 匹配任意单个字符
// * 匹配零个或者多个前面的元素；

var isMatch1=function(text,pattern){
    if(text.length!=pattern.length){
        return false;
    }

    let indexT=0;
    let indexP=0;

    while(indexP<pattern.length){
        if(indexT>=text.length){
            return false;
        }
        if(pattern[indexP++]!=text[indexT++]){
            return false;
        }
    }
    return indexP==text.length;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

};