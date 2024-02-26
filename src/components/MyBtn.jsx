import React from 'react'

export default function MyBtn({ children, classname, onClick }) {
  return (
    <>
      <button onClick={() => onClick()} className={classname}>
        {children}
      </button>
    </>
  )
}
