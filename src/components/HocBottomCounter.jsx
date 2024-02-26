import React from 'react'

export default function withBottomWordCounter(Component) {
  return ({ maxByte = 200, currentByte, ...rest }) => (
    <div className="flex flex-col">
      <Component {...rest} />
      <p className="flex justify-end">
        {currentByte}/{maxByte}
      </p>
    </div>
  )
}
