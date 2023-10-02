const Question = require('../models/personalQuestion-model')

exports.createQuestion = async (req, res) => {
  try {

    const question = await Question.create({
      type: req.body.type,
      question: req.body.question,
      choices: [...req.body.choices],
      maxChoice: req.body.maxChoice,
      disqualify: req.body.disqualify,
      other: req.body.other
    })

    res.status(200).json({
      message: 'ok',
      data: question
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()

    res.status(200).json({
      message: 'ok',
      data: questions
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getAQuestion = async (req, res) => {
  try {
    const id = req.params.id
    const question = await Question.findById(id)

    res.status(200).json({
      message: 'ok',
      data: question
    })
  } catch (err) {
    console.log(err)
  }
}

exports.editQuestion = async (req, res) => {
  try {
    const id = req.params.id
    const editedQuestion = await Question.findByIdAndUpdate(id, req.body, {
      new: true
    })

    res.status(200).json({
      message: 'ok',
      data: editedQuestion
    })
  } catch (err) {
    console.log(err)
  }
}

exports.deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id
    await Question.findByIdAndDelete(id)

    res.status(204).json({
      message: 'ok'
    })
  } catch (err) {
    console.log(err)
  }
}