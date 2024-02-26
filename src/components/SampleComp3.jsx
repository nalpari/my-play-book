import React, { useEffect, useState } from 'react'
import SquareSpinner from './SquareSpinner'

export default function SampleComp3() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading && <SquareSpinner />}
      {!isLoading && (
        <>
          <div>저는 3번 샘플입니다.</div>
          <div className="flex flex-col">
            <p className="text-xl mt-2">내가 좋아하는 것들....</p>
            <label>
              <input
                type="checkbox"
                className="accent-pink-500"
                defaultChecked
              />
              술먹기
            </label>
            <label>
              <input type="checkbox" className="accent-pink-500" /> 게임하기
            </label>
            <label>
              <input type="checkbox" className="accent-pink-500" /> 잠자기
            </label>
          </div>
        </>
      )}
    </>
  )
}
