// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

// 例如：

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

//思路1：分解为数组，长度减去下标为当前位的次方，实际是26进制

/**
 * @param {string} columnTitle
 * @return {number}
 */

const dict={
    'A':1,
    'B':2,
    'C':3,
    'D':4,
    'E':5,
}
 var titleToNumber = function(columnTitle) {
    let arr=columnTitle.split('');
    console.log(arr);
    sum=0;
    for(i=columnTitle.length;i>-1;i--)
    {
        console.log(dict[arr[i]]);
        sum+=dict[arr[i]]*(26**(i));
    }
    console.log(sum);
};

string='AB';
titleToNumber(string);