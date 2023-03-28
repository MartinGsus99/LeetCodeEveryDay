/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//使用滑动窗口方法，然后如果找到符合的子串则result加入left；
//90.87 95.49
var findAnagrams = function (s, p) {
    var need = new Map();
    for (let c of p) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1);
    }
    console.log(need);

    var left = 0;
    var right = 0;
    let length=p.length;

    var valid = need.size;
    var res = [];

    while (right < s.length) {
        let c = s[right];

        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) === 0) {
                valid -= 1;
            }
        }

        while (valid === 0) {
            let d = s[left];
            if (need.has(d)) {
                need.set(d, need.get(d) + 1);
                if(need.get(d)===1){
                    valid+=1;
                }
            }
            if(right+1-left===length){
                res.push(left);
            }
            left++;
        }
        right++;
    }
    return res;
};

s = "cbaebabacd";
p = "abc";

console.log(findAnagrams(s, p));