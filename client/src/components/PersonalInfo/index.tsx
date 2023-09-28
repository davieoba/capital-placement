import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { PlusOutlined } from '@ant-design/icons'

import './index.scss'
import { SwitchContainer } from '../SwitchContainer'

export const PersonalInformation = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="PersonalInfo">
      <div className='container'>
        <header className="section-header">
          <h3>Personal Information</h3>
        </header>

        <section className=''>
          <form className='personalInfo-form'>
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

            <div className='personalInfo-input'>
              <label>Gender </label>

              <div className='wrapper'>
                <Checkbox onChange={onChange}>Internal</Checkbox>
                <SwitchContainer />
              </div>
            </div>

            <div className='add-question-container'>
              <div className=''>
                <PlusOutlined style={{ fontSize: '3.2rem' }} />
                <label className=''>Add a question</label>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}



