import axios from "axios"


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

interface IQuestion {
  type: string,
  question: string,
  choices?: string[],
  maxChoice?: number,
  disqualify?: boolean,
  other?: boolean
}

export async function fetchPersonalData(): Promise<Data> {
  const response = await fetch('http://localhost:5000/api/v1/personal')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

// newItem, id: { newItem: string, id: number }
export const editPersonalData = async (newItem: string, id: string): Promise<Data> => {
  const response = await axios.patch(`http://localhost:5000/api/v1/personal/${id}`, {
    data: newItem
  })
  if (!response.status === true) {
    throw new Error('Failed to fetch data')
  }
  return response.data
}

export const createPersonalData = async (newItem: IQuestion): Promise<Data> => {
  const response = await axios.post(`http://localhost:5000/api/v1/personal`, newItem)

  if (!response.status === true) {
    throw new Error('Failed to fetch data')
  }

  return response.data

}