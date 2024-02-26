import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import useForm from '../hooks/useForm'

export default function Counter() {
  const [value, setValue] = useState(0)
  const lastValue = useDebounce(value, 500)

  const [copied, copy] = useCopyToClipboard('Lorem ipsum')

  const initialState = { email: '', password: '' }
  const [values, setValues] = useForm(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col mb-4">
          <p>
            Current: {value} - Debounced: {lastValue}
          </p>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setValue(value + 1)}
          >
            Increment
          </button>
        </div>
        <div className="flex flex-col mb-4">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={copy}
          >
            Click to copy
          </button>
          <span>{copied && 'Copied!'}</span>
        </div>
        <div className="flex flex-col mb-4">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
              onChange={setValues}
            />
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
              onChange={setValues}
            />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
