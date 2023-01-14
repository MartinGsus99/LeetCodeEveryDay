/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//1.设置一个进位flag；2.如果两个对应位置的相同，则返回0；不同，则返回1，然后再加进位；

//解法二、直接转化为二进制；
//问题：js自带的范围不够，不适用于大型数字；
var addBinary1 = function (a, b) {
    numA = parseInt(a, 2);
    numB = parseInt(b, 2);
    result = numA + numB;

    return result.toString(2)

};

//网友解法：补齐较短的字符串，从头到尾部遍历计算；
var addBinary = function (a, b) {
    let arrayA = a.split('');
    let arrayB = b.split('');
    let aLenght = arrayA.length;
    let bLenght = arrayB.length;
    let plus = 0;
    let arrayC = [];
    let string = '';

    if (aLenght >= bLenght) {
        //首部补充0
        for (let i = 0; i < aLenght - bLenght; i++) {
            arrayB.unshift('0');
        }
        arrayA.reverse();
        arrayB.reverse();
        for (let j = 0; j < aLenght; j++) {
            console.log('a:', arrayA[j], 'b:', arrayB[j]);
            result = parseInt(arrayA[j]) + parseInt(arrayB[j]) + plus;
            if (result > 1) {
                plus = 1;
                result = result - 2;
                arrayC.push(result);
            } else {
                plus = 0;
                arrayC.push(result);
            }
        }
        if (plus == 1) {
            arrayC.push(1);
        }
  
        arrayC.reverse();
        for (let i = 0; i < arrayC.length; i++) {
            string = string + (arrayC[i]);
        }
        return string;
    } else {
        //首部补充0
        for (let i = 0; i < bLenght - aLenght; i++) {
            arrayA.unshift('0');
        }
     
        //反转数组
        arrayA.reverse();
        arrayB.reverse();
        for (let j = 0; j < bLenght; j++) {
            result = parseInt(arrayA[j]) + parseInt(arrayB[j]) + plus;
            if (result > 1) {
                plus = 1;
                result = result - 2;
                arrayC.push(result);
            } else {
                plus = 0;
                arrayC.push(result);
            }
        }

        if (plus == 1) {
            arrayC.push(1);
        }
        arrayC.reverse();
        for (let i = 0; i < arrayC.length; i++) {
            string = string + (arrayC[i]);
        }
        return string;
    }
};



a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

c = '110';
d = '1'
console.log(addBinary(a, b));



