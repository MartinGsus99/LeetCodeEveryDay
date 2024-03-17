const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
    // Write your code here
    while (line = await readline()) {
        let tokens = line.split(' ')
        for (let i = 0; i < tokens.length - 3; i++) {
            if (tokens[i] == tokens[i + 1]) {
                if (tokens[i + 2] == tokens[i + 3]) {
                    tokens[i + 3] = ''
                } else if (tokens[i + 1] == tokens[i + 2]) {
                    tokens[i + 2] = ''
                }
            }
        }
        console.log(tokens)
    }
}()
