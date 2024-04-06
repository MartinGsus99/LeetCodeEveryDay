const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
    // Write your code here
    let str = readline()

    const n = str.length

    let rest = n % 8

    let strs = []
    let temp = ''
    for (let i = 0; i < n; i++) {
        if (i % 8 === 0 && i !== 0) {
            strs.push(temp)
            temp = ''
        }
        temp += str[i]
    }




}()
