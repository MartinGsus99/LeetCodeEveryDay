// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//思路1：使用双指针，辅助函数
//官方思路：滑动窗口（类似左右指针？

/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口，使用一个window记录当前window，滑动的同时记录最长值，如果超过临时最长值更新最长值，返回；
//34.33 98.88
var lengthOfLongestSubstring = function(s) {
    var window=new Map();

    var left=0;
    var right=0;
    var maxLength=0;

    while(right<s.length){
        let c=s[right];

        window.set(c,window.has(c)?window.get(c)+1:1);

        while(window.get(c)>1){
            let d=s[left];
            window.set(d,window.get(d)-1);
            left++;
        }
        maxLength=Math.max(maxLength,right+1-left);
        right++;
    }
    return maxLength;
};

var s="abcabcbb";
var s1="bbbbb";

console.log(lengthOfLongestSubstring(s1))