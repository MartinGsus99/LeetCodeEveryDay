/**
 * @param {string} s
 * @return {string}
 */
//使用栈来存储字符串，每次放进去一个，判断条件，如果与栈顶元素相同就弹出栈；如果不同就压入栈；
//85.56 58.67
var removeDuplicates = function (s) {
    let stack = [];
    let index = 0;
    while (index < s.length) {
      if (stack[stack.length - 1] == s[index]) {
            stack.pop();
        } else{
            stack.push(s[index]);
        }
        index++;
    }
    return stack.join('');
};


let s = "abbaca";
console.log(removeDuplicates(s));