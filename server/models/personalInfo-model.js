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
  personalQuestions: {
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
  }
})

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema)

module.exports = PersonalInfo