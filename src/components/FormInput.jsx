import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function FormInput({ title }) {
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(false)
  const uuid = uuidv4()

  return (
    <>
      <div>
        <label htmlFor={`a-${uuid}`}>{title}</label>
        <input
          type="text"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2"
          id={`a-${uuid}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
          onClick={() => setIsShow(!isShow)}
        >
          보이기/숨기기
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setText('')}
        >
          초기화
        </button>
        {isShow && <div className="text-2xl">{text}</div>}
      </div>
    </>
  )
}
