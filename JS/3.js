// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//思路1：使用双指针，辅助函数
//官方思路：滑动窗口（类似左右指针？

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let strings = s.split('');
    supportFunction(0, 1, strings,0);
};

var supportFunction = function (p1, p2, strings,max_length) {
    let map = new Map();
    var temp_max_length = p2-p1;

    for (var i = p1+1,j=p2+1; p2 < strings.length; p2++) {
        if (!map.has(strings[j])) {
            map.set(strings[j], strings[j]);
        }
        else {
            temp_max_length = Math.max(j-i, temp_max_length);
            return temp_max_length;
        }
    }
    return strings.length-i
}

s = "s"
console.log(lengthOfLongestSubstring(s));

