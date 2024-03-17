/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let s_map = new Map()

    let s_arr = []
    let A = 0
    let B = 0

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++
            s_arr[i] == true
        }
    }


    for (let c of secret) {
        s_map.set(c, (s_map.get(c) || 0) + 1)
    }

    for () {
       

       
    }



}