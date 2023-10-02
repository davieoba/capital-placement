const mongoose = require('mongoose')
const PersonalInfo = require('./personalInfo-model')
const Profile = require('./profile-model')

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "applicationForm"
  },
  attributes: {
    coverImage: String,
    personalInformation: PersonalInfo,
    profile: Profile,
    customizedQuestion: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }]
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User