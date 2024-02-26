import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'
import MyBtn from '../components/MyBtn'

export default function Upload() {
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  }

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  }

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  }

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  }

  const dropzone = {
    backgroundColor: 'rgb(250, 250, 250)',
    color: 'rgb(189, 189, 189)',

    height: '80px',
    width: '100%',
    border: '2px dashed #BDBDBD',
    margin: '0px',
    padding: '20px',
    maxWidth: '100%',
    minWidth: '100%',

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    listStyleImage: 'none',
    listStyleType: 'disc',
    listStylePosition: 'outside',
  }

  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    // accept: {
    //   'image/*': [],
    // },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: file.type.includes('image')
              ? URL.createObjectURL(file)
              : '/file.svg',
          }),
        ),
      )
    },
  })

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  // }, [])

  // useEffect(() => {
  //   console.log(files)
  // }, [files])

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
          alt=""
        />
      </div>
    </div>
  ))

  const handleSubmit = () => {
    const data = new FormData()
    files.map((file) => {
      data.append('files', file)
    })
    data.append('name', 'swyoo')
    data.append('age', 46)

    axios
      .post('http://localhost:39090/api/upload/multi2', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log)
  }

  return (
    <>
      <section className="container">
        <div {...getRootProps()} style={dropzone}>
          <input {...getInputProps()} name="files" />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
      <MyBtn
        onClick={handleSubmit}
        classname={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
      >
        Submit
      </MyBtn>
    </>
  )
}
