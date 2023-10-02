const mongoose = require('mongoose')

const personalInfoSchema = new mongoose.Schema({
  firstName: {
    internalUse: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  lastName: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  emailId: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  phoneNumber: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  nationality: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  currentResidence: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  idNumber: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  dateOfBirth: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  gender: {
    internalUse: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  personalQuestions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }
  ]
})

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema)

module.exports = PersonalInfo