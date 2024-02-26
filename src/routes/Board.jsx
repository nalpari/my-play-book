import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'

export default function Board() {
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState()

  useEffect(() => {
    console.log(desc)
  }, [desc])

  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <>
      <h1>Board</h1>
      <div>
        <Editor setDesc={setDesc} desc={desc} setImage={setImage} />
      </div>
    </>
  )
}
