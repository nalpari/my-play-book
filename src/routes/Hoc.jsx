import React, { useEffect, useState } from 'react'
import withBottomWordCounter from '../components/HocBottomCounter'
import withTopWordCounter from '../components/HocTopCounter'
import TextArea from '../components/TextArea'
import TextField from '../components/TextField'
import withError from '../components/withError'
import withLabel from '../components/withLabel'

// const withLabel = (Component) => {
//   return ({ children, ...rest }) => (
//     <>
//       <label className="font-my">{children}</label>
//       <Component {...rest} />
//     </>
//   )
// }

// const withError = (Component) => {
//   return ({ error = '', ...rest }) => (
//     <>
//       <Component {...rest} />
//       {error && <div className="text-red-700">{error}</div>}
//     </>
//   )
// }

// const TextField = ({ value, onChange, placeholder }) => {
//   return (
//     <input
//       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       value={value}
//       type="text"
//       placeholder={placeholder}
//       onChange={(e) => onChange(e.target.value)}
//     />
//   )
// }

const TextFieldWithLabel = withError(withLabel(TextField))
const TextAreaWithTopCounter = withTopWordCounter(TextArea)
const TextAreaWithBottomCounter = withBottomWordCounter(TextArea)

/**
 * HOC 구현 컴포넌트
 * TextField컴포넌트를 component composition
 * @author yoo sang wook
 * @class
 */
export default function Hoc() {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [textData, setTextData] = useState('asdf')
  const [isOver, setIsOver] = useState(false)

  const maxByte = 50

  useEffect(() => {
    setTimeout(() => {
      setError('에러났어요')
    }, 3000)
  }, [])

  useEffect(() => {
    maxByte === textData.length ? setIsOver(true) : ''
  }, [textData])

  return (
    <>
      <div className="flex flex-col">
        <TextFieldWithLabel
          value={text}
          onChange={setText}
          placeholder="Please Enter..."
          error={error}
        >
          Label Text...
        </TextFieldWithLabel>

        <TextArea value={textData} onChange={setTextData} />

        {/* <TextAreaWithTopCounter
          maxByte={maxByte}
          value={textData}
          onChange={setTextData}
          isOver={isOver}
          currentByte={textData.length}
        /> */}

        <TextAreaWithBottomCounter
          maxByte={maxByte}
          value={textData}
          onChange={setTextData}
          isOver={isOver}
          currentByte={textData.length}
        />
      </div>
    </>
  )
}
