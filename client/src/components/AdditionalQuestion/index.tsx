import { useState } from 'react'
import { Select } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

import './index.scss'
import { additionalQuestionOptions } from '@/globals/form'
import { Paragraph } from '../Questions/Paragraph'
import { MultipleChoice } from '../Questions/MultipleChoice'
import { Dropdown } from '../Questions/Dropdown'
import { OptionQuestion } from '../Questions/OptionQuestion'
import { VideoQuestion } from '../Questions/VideoQuestion'

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
}

export const AdditionalQuestion = ({ setState }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>('paragraph')

  const handleChangeOfQuestion = () => {
    if (currentQuestion === 'paragraph') {
      return <Paragraph setState={setState} edit={false} />
    } else if (currentQuestion === 'multipleChoice') {
      return <MultipleChoice setState={setState} />
    } else if (currentQuestion === 'dropdown') {
      return <Dropdown setState={setState} />
    } else if (currentQuestion === 'yes/no') {
      return <OptionQuestion setState={setState} />
    } else if (currentQuestion === 'videoQuestion') {
      return <VideoQuestion setState={setState} />
    }
  }

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`)
    setCurrentQuestion(value)
  }

  const styles = { width: '100%', height: '6.8rem', borderRadius: '0.5rem', fontSize: '1.4rem', fontFamily: 'poppins' }

  return (
    <div className='AdditionalQuestion'>
      <div className="container">
        {/* <header className="section-header">
          <h3>Additional Questions</h3>
        </header> */}

        <div>
          <form action="" className=''>
            <div className='form-container'>
              <div className='select-question'>
                <label htmlFor="type">Type</label>
                <Select
                  id='type'
                  defaultValue="paragraph"
                  style={styles}
                  onChange={handleChange}
                  suffixIcon={<CaretDownOutlined />}
                  options={additionalQuestionOptions}
                />
              </div>

              {/* i will be changing the form component in this place from time to time */}
              <div>
                {handleChangeOfQuestion()}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
