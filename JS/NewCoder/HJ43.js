const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
    // Write your code here
    const mn = await readline()
        .then(line => line.split(' '))
    const n = Number(mn[0])
    const m = Number(mn[1])

    let count = 0

    const fuzz = Array(m)
    while (count < n) {
        fuzz.push(await readline())
        count++
    }
    console.log(fuzz)

    const bfs = function (startX, startY, fuzz) {
        let queue = []

        queue.push([startX, startY])

        while (queue.length != 0) {
            let size = queue.length

            for (let i = 0; i < size; i++) {

                let [x, y] = queue.shift()

                if (x - 1 > 0 && fuzz[x - 1][y] == 0) {
                    fuzz[x - 1][y] = 1
                    queue.push([x - 1, y])
                }

                if (y - 1 > 0 && fuzz[x][y - 1] == 0) {
                    fuzz[x][y - 1] = 1
                    queue.push([x, y - 1])
                }

                if (x + 1 < fuzz.length && fuzz[x + 1][y] == 0) {
                    fuzz[x + 1][y] = 1
                    queue.push([x + 1, y])
                }

                if (y + 1 < fuzz[0].length && fuzz[x][y + 1] == 0) {
                    fuzz[x][y + 1] = 1
                    queue.push([x, y + 1])
                }
            }
        }


    }


}()
