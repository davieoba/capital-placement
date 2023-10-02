const PersonalInfo = require('../models/personalInfo-model')

exports.createPersonal = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.create({
      ...req.body,
      personalQuestions: {
        type: req.body.type,
        question: req.body.question,
        choices: [...req.body.choices],
        maxChoice: req.body.maxChoice,
        disqualify: req.body.disqualify,
        other: req.body.other
      }
    })

    res.status(200).json({
      message: 'ok',
      data: personalInfo
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getPersonal = async (req, res) => {
  try {
    const personals = await PersonalInfo.find()

    res.status(200).json({
      message: 'ok',
      data: personals
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getAPersonal = async (req, res) => {
  try {
    const id = req.params.id
    const personal = await PersonalInfo.findById(id)

    res.status(200).json({
      message: 'ok',
      data: personal
    })
  } catch (err) {
    console.log(err)
  }
}

exports.editPersonal = async (req, res) => {
  try {
    const id = req.params.id
    const editedPersonal = await PersonalInfo.findByIdAndUpdate(id, req.body, {
      new: true
    })

    res.status(200).json({
      message: 'ok',
      data: editedPersonal
    })
  } catch (err) {
    console.log(err)
  }
}

exports.deletePersonal = async (req, res) => {
  try {
    const id = req.params.id
    await PersonalInfo.findByIdAndDelete(id)

    res.status(204).json({
      message: 'ok'
    })
  } catch (err) {
    console.log(err)
  }
}