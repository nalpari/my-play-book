import { useEffect, useState } from 'react'
import searchText from '../util/search-text'
import useDebounce from '../hooks/useDebounce.jsx'

export default function Autocomplete() {
  const [isShow, setIsShow] = useState(false)
  const [textList, setTextList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const debounceValue = useDebounce(inputValue, 500)
  const handleFocus = () => {
    setIsShow(true)
  }

  const handleFocusOut = () => {
    setIsShow(false)
  }

  const handleChangeInput = (text) => {
    setInputValue(text)
  }

  useEffect(() => {
    setTextList(searchText.filter((t) => t.text.includes(debounceValue)))
  }, [debounceValue])

  useEffect(() => {
    console.log('inputValue: ' + inputValue)
  }, [inputValue])

  return (
    <>
      <h1 className="text-2xl">Autocomplete</h1>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleFocusOut}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul className="m-4">
        {textList &&
          isShow &&
          textList.map((item) => (
            <li
              className="list-disc cursor-pointer"
              key={item.text}
              onClick={() => handleChangeInput(item.text)}
            >
              {item.text}
            </li>
          ))}
      </ul>
    </>
  )
}
