import React, { useEffect, useState } from 'react'
import SquareSpinner from './SquareSpinner'

export default function SampleComp1() {
  const [textData, setTextData] = useState('test')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  return (
    <>
      {isLoading && <SquareSpinner />}
      {!isLoading && (
        <>
          <div>저는 1번 샘플입니다.</div>
          <textarea className="resize rounded-md border-solid border-2 border-sky-500 w-full h-36"></textarea>
        </>
      )}
    </>
  )
}
