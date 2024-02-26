import React, { useEffect, useState } from 'react'
import CircleSpinner from './CircleSpinner'

export default function SampleComp2() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading && <CircleSpinner />}
      {!isLoading && (
        <>
          <div>저는 2번 샘플입니다.</div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Password requirements:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </>
      )}
    </>
  )
}
