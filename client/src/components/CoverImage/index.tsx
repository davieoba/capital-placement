/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import type { RcFile } from 'antd/es/upload'

import './index.scss'
import { UploadTrayIcon } from '@/globals/icons'


export const CoverImage = () => {
  const [file, setFile] = useState('')

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })


  const handleCancel = () => {
    setFile('')
  }

  const uploadButton = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
      <UploadTrayIcon className='upload_icon' />
      <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'poppins' }}>Upload Cover Image</div>
      <p className='upload_info'>16:9 ratio is recommended. Max image size 1mb</p>
    </div>
  )

  return (
    <div className='CoverImage_Container'>
      {file.length > 1 ? (
        <PreviewContainer file={file} handleCancel={handleCancel} />
      ) : (
        <div className="coverImage">
          <div className="cover-image_header">
            <h3>Upload Cover Image</h3>
          </div>
          <div className='content'>
            <div className='uploadContainer'>
              <Upload
                beforeUpload={async (file) => {
                  const res = await getBase64(file)
                  setFile(res)
                  return false
                }}
                showUploadList={{ showRemoveIcon: false, showPreviewIcon: false, showDownloadIcon: false }}
              >
                {uploadButton}
              </Upload>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const PreviewContainer = ({ file, handleCancel }: { file: string, handleCancel: () => void }) => {
  return (
    <div className='preview_image-container'>
      <div className="cover-image_header">
        <h3>Upload Cover Image</h3>
      </div>
      <div>
        <div className='image-wrapper'>
          <img src={file} alt='preview img' />
        </div>
        <div className='remove-element' onClick={() => handleCancel()}>
          <CloseOutlined />
          <span>Delete & Reupload</span>
        </div>
      </div>
    </div>
  )
}
