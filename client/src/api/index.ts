// api.ts
export interface Data {
  // Define your data structure here
  data: {
    _id: string
    __v?: number
    firstName: {
      internalUse: boolean,
      show: true
    },
    lastName: {
      internalUse: boolean,
      show: boolean
    },
    emailId: {
      internalUse: boolean,
      show: boolean
    },
    phoneNumber: {
      internalUse: boolean,
      show: boolean
    },
    nationality: {
      internalUse: boolean,
      show: boolean
    },
    currentResidence: {
      internalUse: boolean,
      show: boolean
    },
    idNumber: {
      internalUse: boolean,
      show: boolean
    },
    dateOfBirth: {
      internalUse: boolean,
      show: boolean
    },
    gender: {
      internalUse: boolean,
      show: boolean
    },
    personalQuestions: {
      type: string,
      question: string,
      choices: string[],
      maxChoice: number,
      disqualify: boolean,
      other: boolean
    }
  }[]

}

export async function fetchPersonalData(): Promise<Data> {
  const response = await fetch('http://localhost:5000/api/v1/personal')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

/**
 * {
    "message": "ok",
    "data": {
        "firstName": {
            "internalUse": boolean,
            "show": true
        },
        "lastName": {
            "internalUse": boolean,
            "show": false
        },
        "emailId": {
            "internalUse": false,
            "show": false
        },
        "phoneNumber": {
            "internalUse": false,
            "show": false
        },
        "nationality": {
            "internalUse": false,
            "show": false
        },
        "currentResidence": {
            "internalUse": false,
            "show": false
        },
        "idNumber": {
            "internalUse": false,
            "show": false
        },
        "dateOfBirth": {
            "internalUse": false,
            "show": false
        },
        "gender": {
            "internalUse": false,
            "show": false
        },
        "personalQuestions": {
            "type": "paragraph",
            "question": "some random question",
            "choices": [
                "a",
                "b",
                "c"
            ],
            "maxChoice": 2,
            "disqualify": false,
            "other": false
        },
        "_id": "651a5c6249e11f3796aca509",
        "__v": 0
    }
}
 */