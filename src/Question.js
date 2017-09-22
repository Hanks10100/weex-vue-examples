/**
 * 抛出问题
 * 提供可快速回复的选项
 * 等待用户输入
 * 获取历史聊天记录
 * 获取目标问题列表
 * 尝试匹配目标问题
 * 匹配到目标节点则跳转到下一个问题
 * 否则跳转到【结束】节点
 */

class Question {
  constructor () {
    this.qid = 'xxx'
    this.question = '是哪个平台有问题？'
    this.generalOptions = [
      { text: 'Android' },
      { text: 'iOS' },
      { text: 'Web (H5)' }
    ]
    this._matrix = []
    this.targets = [2, 5, 5312, 24]
  }

  // TODO: 抛出问题
  ask () {}

  matchTarget () {
    const userInput = 'Android' // TODO: get user input
    const targetQid = 0
    return targetQid
  }
}


async function start () {
  const chatHistory = []

  let nextQuestion = 1
  while (!nextQuestion) {
    // 从数据库中取出问题
    const question = await pickQuestion(nextQuestion)

    // 向客户端发送问题和选项，并等待回复
    chatHistory.push(question)
    const answer = await sendQuestion(question)
    chatHistory.push(answer)

    // 匹配自身选项
    nextQuestion = matchQuestion(question, answer)

    // 调用智能匹配
    if (!nextQuestion) {
      nextQuestion = smartMatch(chatHistory)
    }
  }
}

function matchQuestion (question, answer) {
  // 提取答案中的特征值
  const features = question.generalOptions.map(option => matchOption(option.text, answer.text))

  // 匹配目标
  const targets = question._matrix.map(vector => multipleVector(vector, features))

  // 取出最合适的下标，并返回下一个问题的 qid
  return question.targets[getMaxIndex(targets)]
}

// TODO: 智能匹配下一个答案
function smartMatch (history) {
  return 2 // 返回结束问题的编号
}

// 两个向量相乘
function multipleVector (vectorA, vectorB) {
  let N = vectorA.length
  let sum = 0
  while (N--) {
    sum += vectorA[N] * vectorB[N]
  }
  return sum
}

// 获取数组中最大数字的下标
function getMaxIndex (array) {
  let maxValue = Number.MIN_VALUE
  let maxIndex = 0
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > maxValue) {
      maxIndex = i
      maxValue = array[i]
    }
  }

  // 最大值不超过 0.5 时则视为匹配失败
  return (maxValue > 0.5) ? maxIndex : -1
}

// 匹配字符串 A 和 B 的相似度
function matchOption (strA, strB) {
  if (strA === strB) {
    return 1
  }
  return 0
}
