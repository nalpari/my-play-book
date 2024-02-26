import Hoc from '../routes/Hoc'
import Multi from '../routes/Multi'
import TabSampleOne from '../routes/TabSamplenOne'
import TabSampleTwo from '../routes/TabSampleTwo'
import TabSampleThree from '../routes/TabSampleThree'
import Board from '../routes/Board'
import BarChart from '../routes/BarChart'
import LineChart from '../routes/LineChart'
import PieChart from '../routes/PieChart'
import Counter from '../routes/Counter'
import Upload from '../routes/Upload'
import FunctionSample from '../routes/FunctionSample'
import LinkTest from '../routes/LinkTest.jsx'
import LinkTestRegist from '../routes/LinkTestRegist'
import SimulationList from '../routes/SimulationList.jsx'

const menuList = [
  {
    name: 'Component Composition',
    component: <Hoc />,
  },
  {
    name: 'Multi',
    component: <Multi />,
  },
  {
    name: 'TabSample1',
    component: <TabSampleOne />,
  },
  {
    name: 'TabSample2',
    component: <TabSampleTwo />,
  },
  {
    name: 'TabSample3',
    component: <TabSampleThree />,
  },
  {
    name: 'Board',
    component: <Board />,
  },
  {
    name: 'Bar Chart',
    component: <BarChart />,
  },
  {
    name: 'Line Chart',
    component: <LineChart />,
  },
  {
    name: 'Pie Chart',
    component: <PieChart />,
  },
  {
    name: 'useDebounce',
    component: <Counter />,
  },
  {
    name: 'upload',
    component: <Upload />,
  },
  {
    name: 'Function Test',
    component: <FunctionSample />,
  },
  {
    name: 'Link Test',
    component: <LinkTest />,
  },
  {
    name: 'Link Test Regist',
    component: <LinkTestRegist />,
  },
  {
    name: 'Simulation',
    component: <SimulationList />,
  },
]

export default menuList
