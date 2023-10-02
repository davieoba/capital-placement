import { useState } from "react"
import { Input } from "antd"
import { CloseOutlined } from '@ant-design/icons'

import './index.scss'

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
}

export const Paragraph = ({ setState }: Props) => {
  // state for paragraph form
  const [paragraphQuestion, setParagraphQuestion] = useState<string>('')

  console.log(paragraphQuestion)

  // handle the form for sending these values to my api

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
          onClick={() => setState(null)}
        >
          <CloseOutlined className='icon' />
          <p className='text'>Delete Question</p>
        </div>
        <div>
          <button className='w-[5.9rem] bg-save-btn rounded-[0.5rem] font-semibold h-[3.5rem] text-[1.4rem] text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}
