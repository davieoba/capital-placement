import { Switch } from "antd"
import { useState } from "react"

export const SwitchContainer = () => {
  const [checkSwitch, setCheckSwitch] = useState<boolean>(false)

  const switchChange = (checked: boolean) => {
    setCheckSwitch(checked)
  }

  return (
    <div className='switch-container'>
      <Switch onChange={switchChange} style={{ backgroundColor: `${checkSwitch ? '#087B2F' : '#F4F4F4'}` }} />
      <span>{checkSwitch ? <p className='active'>Show</p> : <p className='in-active'>Hide</p>}</span>
    </div>
  )
}
