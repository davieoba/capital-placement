import { useState } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { PlusOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid';

import './index.scss'
import { SwitchContainer } from '../SwitchContainer'
import { AdditionalQuestion } from '../AdditionalQuestion'

export const PersonalInformation = () => {
  const [addForm, setAddForm] = useState<string | null>(null)

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="PersonalInfo max-w-[59rem] shadow-personal-info rounded-[2rem]">
      <div className='container'>
        <header className="section-header">
          <h3>Personal Information</h3>
        </header>

        <section className=''>
          <div className='personalInfo-form'>
            <div className='personalInfo-input'>
              <label>First Name</label>
            </div>

            <div className='personalInfo-input'>
              <label>Last Name</label>
            </div>

            <div className='personalInfo-input'>
              <label>Email</label>
            </div>

            <div className='personalInfo-input'>
              <label>Phone <span className=''>without dial code</span></label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='personalInfo-input'>
              <label>Nationality </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='personalInfo-input'>
              <label>Current Residence </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='personalInfo-input'>
              <label>ID Number </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='personalInfo-input'>
              <label>Date of Birth </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='personalInfo-input' style={{ borderBottom: 'none' }}>
              <label>Gender </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            {/* include the new form here */}
            {addForm && <AdditionalQuestion setState={setAddForm} />}

            <div className='add-question-container'>
              <div
                className='add-question-btn'
                onClick={() => {
                const key = uuidv4()
                setAddForm(key)
                }}
              >
                <PlusOutlined style={{ fontSize: '2.4rem' }} />
                <label className=''>Add a question</label>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}



