const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
    // Write your code here
    while ((line = await readline())) {

    }

    let tokens = line.split(" ")


    let s = tokens[0]
    let t = tokens[1]

    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i].toStrting().toLowerCase() === t[i].toStrting().toLowerCase()) {
            count++
        }
    }

    console.log(count)
})()
