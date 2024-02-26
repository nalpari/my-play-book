import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FormInput from '../components/FormInput'
import IdHeadless from '../components/IdHeadless'
import axios from 'axios'

const MyForm = ({ text, setText, isShow, setIsShow, thisId }) => (
  <>
    <label htmlFor={`asdf-${thisId}`}>title - {thisId}</label>
    <input
      type="text"
      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2"
      id={`asdf-${thisId}`}
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
  </>
)

export default function FormCheck() {
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState('')
  const [dataIsShow, setDataIsShow] = useState(false)
  const [myTitle, setMyTitle] = useState('타이틀')
  const [myTitle2, setMyTitle2] = useState('타이틀2')
  const [data2, setData2] = useState('')
  const [myTitle3, setMyTitle3] = useState('타이틀3')
  const [data3, setData3] = useState('')

  const formProps = {
    text,
    setText,
    isShow,
    setIsShow,
    thisId: uuidv4(),
  }

  const dataProps = {
    data,
    setData,
  }

  const handleApiCheck = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=b8B6CITeZJhzttzri98034vQFYB7L54fc7ywxQak',
      )
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <FormInput title="텍스트" />
      <FormInput title="텍스트2" />

      <div>
        <MyForm {...formProps} />
      </div>

      <IdHeadless>
        {({ uuid }) => {
          return (
            <div>
              <label htmlFor={`asdf-${uuid}`}>
                {myTitle} - {uuid}
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2"
                id={`asdf-${uuid}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
                onClick={() => setDataIsShow(!dataIsShow)}
              >
                보이기/숨기기
              </button>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => setData('')}
              >
                초기화
              </button>
              {isShow && <div className="text-2xl">{data}</div>}
            </div>
          )
        }}
      </IdHeadless>
      <IdHeadless>
        {({ uuid }) => {
          return (
            <div>
              <label htmlFor={`${uuid}`}>
                {myTitle2} - {uuid}
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2"
                id={`${uuid}`}
                value={data2}
                onChange={(e) => setData2(e.target.value)}
              />
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
                onClick={() => setDataIsShow(!dataIsShow)}
              >
                보이기/숨기기
              </button>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => setData2('')}
              >
                초기화
              </button>
              {isShow && <div className="text-2xl">{data2}</div>}
            </div>
          )
        }}
      </IdHeadless>
      <IdHeadless>
        {({ uuid }) => {
          return (
            <div>
              <label htmlFor={`${uuid}`}>
                {myTitle3} - {uuid}
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2"
                id={`${uuid}`}
                value={data3}
                onChange={(e) => setData3(e.target.value)}
              />
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
                onClick={() => setDataIsShow(!dataIsShow)}
              >
                보이기/숨기기
              </button>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => setData3('')}
              >
                초기화
              </button>
              {isShow && <div className="text-2xl">{data3}</div>}
            </div>
          )
        }}
      </IdHeadless>
      <button
        className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleApiCheck}
      >
        api 호출
      </button>
    </>
  )
}
