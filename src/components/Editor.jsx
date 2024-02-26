import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios'
import React, { useState } from 'react'

export default function Editor({ setDesc, desc, setImage }) {
  const [flag, setFlag] = useState(false)
  const imgLink = 'http://localhost:3001/images/'

  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData()
          loader.file.then((file) => {
            data.append('name', file.name)
            data.append('file', file)

            axios
              .post('http://localhost:3001/api/upload', data)
              .then((res) => {
                if (!flag) {
                  setFlag(true)
                  setImage(res.data.filename)
                }
                resolve({
                  default: `${imgLink}/${res.data.filename}`,
                })
              })
              .catch((err) => reject(err))
          })
        })
      },
    }
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader)
    }
  }

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: [uploadPlugin],
        }}
        data={`<p>Hello from CKEditor 5!</p>`}
        onChange={(event, editor) => {
          const data = editor.getData()
          setDesc(data)
          console.log(desc)
        }}
      />
    </>
  )
}
