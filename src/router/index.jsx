import { createBrowserRouter, useOutlet } from 'react-router-dom'
import App from '../App'
import Inputs from '../components/Inputs'
import Datepicker from '../routes/Datepicker'
import DuplicatedTab from '../routes/DuplicatedTab'
import Hoc from '../routes/Hoc'
import LoginForm from '../routes/LoginForm'
import Multi from '../routes/Multi'
import Start from '../routes/Start'
import Tree from '../routes/Tree'
import Users from '../routes/Users'
import FormCheck from '../routes/FormCheck'

const router = createBrowserRouter([
  {
    path: '/main',
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: '/main/form-id-check',
        element: <FormCheck />,
      },
      {
        path: '/main/hoc',
        element: <Hoc />,
      },
      {
        path: '/main/multi',
        element: <Multi />,
      },
      {
        path: '/main/input',
        element: <Inputs />,
      },
      {
        path: '/main/user',
        element: <Users />,
      },
      {
        path: '/main/tree',
        element: <Tree />,
      },
      {
        path: '/main/date',
        element: <Datepicker />,
      },
      {
        path: '/main/duplicated-tab',
        element: <DuplicatedTab />,
      },
    ],
  },
  {
    path: '/',
    element: <LoginForm />,
  },
])

export default router
