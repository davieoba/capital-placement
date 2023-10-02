const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["paragraph", "shortAnswer", "yes/no", "dropdown", "multipleChoice", "date", "number", "fileUpload", "videoQuestion"],
    default: "Paragraph"
  },
  question: {
    type: String,
    default: ""
  },
  choices: [
    {
      type: String,
      default: ""
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

const Question = mongoose.model('PersonalQuestion', QuestionSchema)

module.exports = Question

