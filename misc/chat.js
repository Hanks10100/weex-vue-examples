import * as dba from './QADB'

function containChinese (string) {
  return !!/.*[\u4e00-\u9fa5]+.*$/.test(string)
}

function matchAnswer (question, answer) {
  const candidates = answer.options
  let chosen = 900000
  console.log(question)
  if (containChinese(question.title)) {
    return 900001
  }
  candidates.forEach(option => {
    // TODO: smarter
    if (question.title == option.title) {
      chosen = option.nextQid || answer.defaultNextQid
      return
    }
  })

  // TODO: fallback

  return chosen
}

function selectAndAnswer (qid, callback) {
  return dba.select(qid)
    .then(callback)
    .catch(() => {
      selectAndAnswer(999999)
        .then(callback)
        .catch(() => {
          setTimeout(() => {
            selectAndAnswer(999999)
          }, 2000)
        })
    })
}

let lastAnswer = null
export function judge (chatHistory) {
  const lastQuestion = Object.assign({}, chatHistory[chatHistory.length - 1])
  let qid = 100001
  return new Promise((resolve, reject) => {
    if (lastAnswer) {
      qid = matchAnswer(lastQuestion, lastAnswer)
    }

    selectAndAnswer(qid, answer => {
      // console.log(answer)
      const realAnswer = Object.assign(answer)
      if (answer.doNotRecord) {
        realAnswer.options = lastAnswer.options
      } else {
        lastAnswer = realAnswer
      }
      resolve(realAnswer)
    })
  })
}
