import { Input, Select } from "antd"
import { CloseOutlined, CaretDownOutlined } from '@ant-design/icons'

import './index.scss'
import { selectVideoTime } from "@/globals/form"

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
}

const { TextArea } = Input
export const VideoQuestion = ({ setState }: Props) => {
  const styles = { width: '100%', height: '6.8rem', borderRadius: '0.5rem', fontSize: '1.4rem', fontFamily: 'poppins' }

  return (
    <div className="VideoQuestion space-y-[2.9rem]">
      <div>
        <label className="text-[2rem] font-semibold mb-[0.8rem]">Question</label>
        <Input style={styles} placeholder="Q: Tell us about yourself" />
      </div>

      <div>
        <TextArea rows={8} />
      </div>

      <div className="flex gap-[2.9rem]">
        <Input className="basis-[25.8rem] h-[6.8rem]" />
        <Select className="flex-grow h-[6.8rem]" placeholder='in (sec/min)' suffixIcon={<CaretDownOutlined />} options={selectVideoTime} />
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
