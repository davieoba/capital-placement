import { useState } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { PlusOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid';

import './index.scss'
import { SwitchContainer } from '../SwitchContainer'
import { AdditionalQuestion } from '../AdditionalQuestion'

export const PersonalProfile = () => {
  const [addForm, setAddForm] = useState<string | null>(null)

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="PersonalProfile max-w-[59rem] shadow-personal-info rounded-[2rem]">
      <div className="container">
        <header className="section-header">
          <h3>Profile</h3>
        </header>

        <section>
          <form className="personalProfile-form">
            <div className="personalProfile-input">
              <label>Education</label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className="personalProfile-input">
              <label>Experience</label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className="personalProfile-input">
              <label>Resume</label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            {/* include the new form here */}
            {addForm && <AdditionalQuestion setState={setAddForm} />}

            <div className='add-question-container'>
              <div
                className='cursor-pointer w-fit text-save-btn'
                onClick={() => {
                  const key = uuidv4()
                  setAddForm(key)
                }}>
                <PlusOutlined style={{ fontSize: '2.4rem' }} />
                <label className='cursor-pointer'>Add a question</label>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
