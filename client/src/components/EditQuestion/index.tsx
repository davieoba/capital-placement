import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Paragraph } from '../Questions/Paragraph'
import { MultipleChoice } from '../Questions/MultipleChoice'
import { Dropdown } from '../Questions/Dropdown'
import { OptionQuestion } from '../Questions/OptionQuestion'
import { VideoQuestion } from '../Questions/VideoQuestion'

type QuestionProps = {
  type: string
  question: string
  setState: React.Dispatch<React.SetStateAction<string | null>>
  id?: string
}

export const EditQuestion = ({ type, question, setState, id }: QuestionProps) => {
  const [edit, setEdit] = useState<boolean>(false)

  const render = () => {
    if (type === 'paragraph') {
      return <Paragraph setState={setState} edit={edit} id={id} />
    } else if (type === 'multipleChoice') {
      return <MultipleChoice setState={setState} />
    } else if (type === 'dropdown') {
      return <Dropdown setState={setState} />
    } else if (type === 'yes/no') {
      return <OptionQuestion setState={setState} />
    } else if (type === 'videoQuestion') {
      return <VideoQuestion setState={setState} />
    }
  }

  return (
    <div className="px-[3rem] py-4 space-y-4">
      <div>
        <p className="text-[#979797] text-[1.4rem]">{type}</p>
        <div className="flex items-center justify-between border-b pb-8 gap-x-4">
          <p className=" w-fit text-[2rem] font-semibold"> {question} </p>
          <div className='w-fit' onClick={() => setEdit(!edit)}>
            <EditOutlined className='text-[1.8rem]' />
          </div>
        </div>
      </div>

      {edit && render()}
    </div>
  )
}
