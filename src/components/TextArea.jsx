import React, { useEffect, useState } from 'react'

export default function TextArea({ value, onChange, isOver = false }) {
  return (
    <>
      <textarea
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className={`resize rounded-md border-solid border-2 border-sky-500 w-full h-36`}
        disabled={isOver ? `disabled` : ''}
      ></textarea>
    </>
  )
}
