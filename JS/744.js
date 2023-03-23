/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

//直接遍历   7.22 59.48
var nextGreatestLetter1 = function(letters, target) {
    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            return letters[i];
        }
    }
    return letters[0]
};
var nextGreatestLetter = function(letters, target) {
    const length = letters.length;
    if (target >= letters[length - 1]) {
        return letters[0];
    }
    let low = 0, high = length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (letters[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
};

let letters = ["c","f","j"]
let target = "d"
console.log(nextGreatestLetter(letters,target))