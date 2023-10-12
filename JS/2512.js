/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
//计算得分；积分和学术ID排序:超时
var topStudents1 = function (positive_feedback, negative_feedback, report, student_id, k) {
  const n = report.length
  const scores = []
  for (let i = 0; i < n; i++) {
    let report_words = report[i].split(" ")
    console.log(report_words)
    let score = 0
    for (let j = 0; j < report_words.length; j++) {
      if (positive_feedback.indexOf(report_words[j]) != -1) {
        score += 3
      }
      if (negative_feedback.indexOf(report_words[j]) != -1) {
        score -= 1
      }
    }
    scores[i] = score
  }
  console.log(scores)
  let score_table = []
  for (let i = 0; i < n; i++) {
    let newData = {
      id: student_id[i],
      score: scores[i]
    }
    score_table.push(newData)
  }

  score_table.sort((a, b) => a.score === b.score ? a.id - b.id : b.score - a.score)
  console.log(score_table)

  return score_table.splice(0, k).map((val) => val.id)
}

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
  let scoreMap = new Map
  positive_feedback.forEach((val) => scoreMap.set(val, 3))
  negative_feedback.forEach((val) => scoreMap.set(val, -1))
  let arr = report.map((val, index) => ({
    id: student_id[index],
    score: val.split(" ").reduce((pre, cur) => pre + (scoreMap.get(cur) || 0), 0)
  }))

  arr.sort((a, b) => a.score === b.score ? a.id - b.id : b.score - a.score)
  return arr.splice(0, k).map((val) => val.id)
}
//let positive_feedback = ["smart", "brilliant", "studious"], negative_feedback = ["not"], report = ["this student is studious", "the student is smart"], student_id = [1, 2], k = 2
let positive_feedback = ["smart", "brilliant", "studious"], negative_feedback = ["not"], report = ["this student is not studious", "the student is smart"], student_id = [1, 2], k = 2
console.log(topStudents(positive_feedback, negative_feedback, report, student_id, k))