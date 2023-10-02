import { Checkbox, Input } from "antd"
import { CloseOutlined } from '@ant-design/icons'

import { ListIcon, PlusIcon } from "@/globals/icons"

import './index.scss'

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
}

export const Dropdown = ({ setState }: Props) => {
  const styles = { width: '100%', height: '6.8rem', borderRadius: '0.5rem', fontSize: '1.4rem', fontFamily: 'poppins' }

  return (
    <div className="Dropdown">
      <div className="question">
        <label htmlFor='question'>Question</label>
        <Input
          style={styles}
          id='question'
        />
      </div>
      <div>
        <label className="add-question-label">Choice</label>
        <div className="add-question">
          <ListIcon />
          <Input style={styles} />
          <PlusIcon />
        </div>

        <div className="enable-question">
          <Checkbox checked />
          <label>Enable other options</label>
        </div>
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
