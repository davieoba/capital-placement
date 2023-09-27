const mongoose = require('mongoose')
const PersonalQuestion = require('./personalQuestion-model')

const profileSchema = new mongoose.Schema({
  education: {
    mandatory: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  experience: {
    mandatory: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  resume: {
    mandatory: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  profileQuestions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PersonalQuestion'
    }
  ]
})

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile