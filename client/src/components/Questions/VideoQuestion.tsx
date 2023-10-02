import { Input } from "antd"

import './index.scss'

export const VideoQuestion = () => {
  const styles = { width: '100%', height: '6.8rem', borderRadius: '0.5rem', fontSize: '1.4rem', fontFamily: 'poppins' }

  return (
    <div className="VideoQuestion">
      <div>
        <label>Question</label>
        <Input style={styles} />

      </div>
    </div>
  )
}
