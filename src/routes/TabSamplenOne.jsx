import React, { useState } from 'react'

export default function TabSamplenOne() {
  const [input, setInput] = useState('')

  return (
    <>
      <div className="mb-4">
        중복 탭 허용을 위한 테스트용 페이지 컴포넌트 입니다.
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="w-full bg-slate-200 rounded-lg p-2">OUTPUT : {input}</p>
      </div>
    </>
  )
}
