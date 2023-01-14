/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

//将句子按照单词转换成数组；诶个匹配；
 var findOcurrences = function(text, first, second) {
    var r = /\b[a-zA-Z]+\b/g;
    let words = text.match(r);
    console.log(words);
    let result=[];

    for(let i=0;i<words.length-2;i++)
    {
        if(words[i]==first && words[i+1]==second)
        {
            result.push(words[i+2]);
        }
    }
    return result;
};


// text = "alice is a good girl she is a good student";
// first = "a"; 
// second = "good";

// text = "we will we will rock you"; first = "we"; second = "will";

text="ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk"
first="lnlqhmaohv"
second="ypkk"

console.log(findOcurrences(text,first,second))