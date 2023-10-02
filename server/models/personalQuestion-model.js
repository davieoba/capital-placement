const mongoose = require('mongoose')

const personalQuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["paragraph", "shortAnswer", "yes/no", "dropdown", "multipleChoice", "date", "number", "fileUpload", "videoQuestion"],
    default: "Paragraph"
  },
  question: {
    type: String,
    default: string
  },
  choices: [
    {
      type: String,
      default: "string"
    }
  ],
  maxChoice: {
    type: Number,
    default: 0
  },
  disqualify: {
    type: Boolean,
    default: false
  },
  other: {
    type: Boolean,
    default: false
  }
})

const PersonalQuestion = mongoose.model('PersonalQuestion', personalQuestionSchema)

module.exports = PersonalQuestion

