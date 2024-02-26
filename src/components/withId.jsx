import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function withId(WrappedComponent) {
  const thisId = uuidv4()
  return (children) => (
    <WrappedComponent id={thisId}>
      {React.cloneElement(children)}
    </WrappedComponent>
  )
}
