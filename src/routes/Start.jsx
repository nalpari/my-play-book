import React from 'react'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <>
      <div className="flex gap-4">
        <Link to="/main/hoc">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Component Composition
          </button>
        </Link>
        <Link to="/main/form-id-check">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Form ID Check
          </button>
        </Link>
        <Link to="/">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
        </Link>
        <Link to="/main/multi">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Multi
          </button>
        </Link>
        <Link to="/main/input">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Input
          </button>
        </Link>
        <Link to="/main/user">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            User
          </button>
        </Link>
        <Link to="/main/tree">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Tree
          </button>
        </Link>
        <Link to="/main/date">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Datepicker
          </button>
        </Link>
        <Link to="/main/duplicated-tab">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Duplicated Tab
          </button>
        </Link>
      </div>
    </>
  )
}
