import React from 'react'

export default function withTopWordCounter(Component) {
  return ({ maxByte = 200, currentByte, ...rest }) => (
    <div className="flex flex-col">
      <p className="flex justify-end">
        {currentByte}/{maxByte}
      </p>
      <Component {...rest} />
    </div>
  )
}
