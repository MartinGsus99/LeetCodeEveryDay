/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {

  var check = function (timestr) {
    let hh = timestr.slice(0, 2)
    let mm = timestr.slice(3, 5)
    if (parseInt(hh) < 24 && parseInt(mm) < 60) {
      console.log('time', timestr)
      return true
    }
    return false
  }

  let count = 0

  var dfs = function (pos) {
    if (pos == 5) {
      if (check(time)) {
        count++
      }
      return
    }

    if (time[pos] == '?') {
      for (let i = 0; i <= 9; i++) {
        time = time.replace(time[pos], i)
        dfs(pos + 1)
        time = time.replace(time[pos], "?")
      }
    }
    else {
      dfs(pos + 1)
    }
  }
  dfs(0)
  return count
}

console.log(countTime("0?:0?"))