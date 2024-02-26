import { Outlet } from 'react-router-dom'
import Navbar from './routes/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full p-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
