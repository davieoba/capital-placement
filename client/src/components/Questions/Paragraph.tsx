import { useState } from "react"
import { Input } from "antd"
import { CloseOutlined } from '@ant-design/icons'

import './index.scss'
import { createPersonalData, editPersonalData } from "@/api"

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
  edit?: boolean
  id?: string
}

export const Paragraph = ({ setState, edit, id }: Props) => {
  // state for paragraph form
  // console.log(setState)
  const [paragraphQuestion, setParagraphQuestion] = useState<string>('')

  // console.log(paragraphQuestion)


  const handleSubmit = async () => {
    if (edit === true && id !== undefined) {
      // handle for patch
      const data = editPersonalData(paragraphQuestion, id)
      console.log('updated data', data)
    }

    // handle for create
    const newItem = {
      type: 'paragraph',
      question: paragraphQuestion
    }

    console.log('newitem', newItem)
    const data = await createPersonalData(newItem)
    console.log('created data', data)
  }

  return (
    <div className="Paragraph">
      <div>
        <label htmlFor='question'>Question</label>
        <Input
          className="w-full h-[6.8rem] rounded-[0.5rem] text-[1.4rem] font-poppins"
          id='question'
          onChange={(e) => setParagraphQuestion(e.target.value)}
          value={paragraphQuestion}
        />
      </div>

      <div className='flex items-center justify-between mt-[3.2rem]'>
        <div
          className='text-[#a80000] text-[1.5rem] font-semibold flex items-center gap-[0.5rem] cursor-pointer'
          onClick={() => {
            console.log('the code is here')
            setState(null)
          }}
        >
          <CloseOutlined className='icon' />
          <p className='text'>Delete Question</p>
        </div>
        <div>
          <button
            type="button"
            className='w-[5.9rem] bg-save-btn rounded-[0.5rem] font-semibold h-[3.5rem] text-[1.4rem] text-white'
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
