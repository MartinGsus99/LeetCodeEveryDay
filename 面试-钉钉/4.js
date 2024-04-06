function NumberToMoney (money) {
    return money.replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g, ',$1')
}

function fn (str) {
    let [int, frac] = str.toString().split('.')
    let arr = int.toString().split('').reverse()
  
    let st = ""
    arr.forEach((cv, i) => {
        if (i != 0 && i % 3 == 0) {
            st = cv + ',' + st
        } else {
            st = cv + st
        }
    })
    return st+'.'+frac
}
let str = 1234234234.1234
let s = fn(str)
console.log("s:", s)

