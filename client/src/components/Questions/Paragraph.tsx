import { useState } from "react"
import { Input } from "antd"
import { CloseOutlined } from '@ant-design/icons'
// import { useMutation, useQueryClient } from "@tanstack/react-query"

import './index.scss'
import { editPersonalData } from "@/api"

type Props = {
  setState: React.Dispatch<React.SetStateAction<string | null>>
  edit?: boolean
  id?: string
}

export const Paragraph = ({ setState, edit, id }: Props) => {
  // state for paragraph form
  const [paragraphQuestion, setParagraphQuestion] = useState<string>('')
  // const queryClient = useQueryClient()


  // console.log(paragraphQuestion)

  // const mutation = useMutation((paragraphQuestion) => editPersonalData({ paragraphQuestion, id }), {
  //   // onSuccess is called when the mutation is successful
  //   onSuccess: () => {
  //     // Invalidate and refetch the data to update the list
  //     queryClient.invalidateQueries(['get-personal-data'])
  //   },
  // })

  const handleSubmit = () => {
    if (edit === true && id !== undefined) {
      // handle for patch
      // mutation.mutate({ name: paragraphQuestion })

      const data = editPersonalData(paragraphQuestion, id)
      console.log('updated data', data)
    }

    // handle for create
  }

  return (
    <div className="Paragraph">
      <div>
        <label htmlFor='question'>Question</label>
        <Input
          className="w-full h-[6.8rem] rounded-[0.5rem] text-[1.4rem] font-poppins"
          id='question'
          onChange={(e) => setParagraphQuestion(e.target.value)}
          value={paragraphQuestion}
        />
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
          <button type="button" className='w-[5.9rem] bg-save-btn rounded-[0.5rem] font-semibold h-[3.5rem] text-[1.4rem] text-white' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}
