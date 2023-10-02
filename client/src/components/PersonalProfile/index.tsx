import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { PlusOutlined } from '@ant-design/icons'

import './index.scss'
import { SwitchContainer } from '../SwitchContainer'

export const PersonalProfile = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="PersonalProfile">
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

            <div className='add-question-container'>
              <div className=''>
                <PlusOutlined style={{ fontSize: '2.4rem' }} />
                <label className=''>Add a question</label>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
