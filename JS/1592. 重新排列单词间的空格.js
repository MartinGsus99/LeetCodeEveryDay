/**
 * @param {string} text
 * @return {string}
 */

//解法：首先用split("")计算出单词的数量，然后遍历获取空格的数量
var reorderSpaces = function (text) {
    const Length = text.length;
    let wordLength = 0;
    for (const word of text) {
        if (word != ' ') {
            wordLength = wordLength + 1;
        }
    }


    //获取单词的数量
    var r = /\b[a-zA-Z]+\b/g;
    words = text.match(r);
    wordsLength = words.length;


    if (wordsLength == 1 || 0) {

        spaceNum = Length - wordLength;
        let newString = words[0];

        for (let i = 0; i < spaceNum; i++) {
            newString = newString + " ";
        }
        return newString;
    }



    spaceNum = Length - wordLength;
    averSpaceNum = parseInt(spaceNum / (wordsLength - 1));
    deleteSpaceNum = spaceNum % (wordsLength - 1);


    console.log('原字符长度:', Length);
    console.log('总空格数:', spaceNum);
    console.log("平均空格数：", averSpaceNum)
    console.log("多余空格数：", deleteSpaceNum)


    let newString = '';

    space = '';
    for (let i = 0; i < averSpaceNum; i++) {
        space = space + " ";
    }

    delSpace = '';
    for (let i = 0; i < deleteSpaceNum; i++) {
        delSpace = delSpace + " ";
    }

    for (let i = 0; i < words.length - 1; i++) {
        newString = newString + words[i] + space;
    }

    newString = newString + words[wordsLength - 1] + delSpace;

    console.log("new string:", newString);
    console.log("新字符窜长度：", newString.length);
    return newString;
}
text = " practice   makes   perfect";
text1 = "  this   is  a sentence ";
text2 = " hello";

reorderSpaces(text2);