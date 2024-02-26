import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import {
  useSimulationGetSimulations,
  useSimulationAddUser,
  useSimulationDelUser,
} from '../hooks/useSimulationQuery'

export default function SimulationList() {
  const queryClient = useQueryClient()
  const name = useInput('')
  const age = useInput('')
  const email = useInput('')
  const address = useInput('')

  /*const {
    data: simulations,
    isLoading,
    error,
  } = useQuery(
    ['simulation', 'list'],
    () => {
      return commonQuery({
        url: 'http://myapi.devgrr.kr/api/1.0/simulation',
      })
    },
    {
      staleTime: 1000 * 60,
    },
  )*/

  const { simulations, isLoading, error } = useSimulationGetSimulations()
  const { addUserMutate } = useSimulationAddUser()
  const { deleteUserMutate } = useSimulationDelUser()

  /*const { mutate: deleteUser } = useMutation(
    (id) => {
      return commonMutate({
        url: `http://myapi.devgrr.kr/api/1.0/simulation/${id}`,
        method: 'delete',
      })
    },
    {
      onSuccess: () => queryClient.invalidateQueries('simulation'),
    },
  )*/

  const handleDelete = (id) => {
    // deleteUser(id)
    deleteUserMutate(id)
  }

  /*const { mutate: addUser } = useMutation(
    (user) => {
      return commonMutate({
        url: `http://myapi.devgrr.kr/api/1.0/simulation`,
        data: user,
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('simulation')

        name.onInit()
        age.onInit()
        email.onInit()
        address.onInit()
      },
    },
  )*/

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      name: name.value,
      age: Number(age.value),
      email: email.value,
      address: address.value,
    }

    // addUser(newUser)
    addUserMutate(newUser)

    name.reset()
    age.reset()
    email.reset()
    address.reset()
  }

  return (
    <>
      {isLoading && <div>isLoading...</div>}
      {error && <div>error!!</div>}
      {simulations && (
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/6 mr-5 text-2xl">ID</div>
            <div className="w-1/6 mr-5 text-2xl">NAME</div>
            <div className="w-1/6 mr-5 text-2xl">AGE</div>
            <div className="w-1/6 mr-5 text-2xl">EMAIL</div>
            <div className="w-1/6 mr-5 text-2xl">ADDRESS</div>
            <div className="w-1/6 mr-5 text-2xl">Action</div>
          </div>
          {simulations?.map((item) => (
            <div className="flex items-center mt-2" key={item.id}>
              <div className="w-1/6 mr-5">{item.id}</div>
              <div className="w-1/6 mr-5">
                <Link to={`/crud/detail/${item.id}`}>{item.name}</Link>
              </div>
              <div className="w-1/6 mr-5">{item.age}</div>
              <div className="w-1/6 mr-5">{item.email}</div>
              <div className="w-1/6 mr-5">{item.address}</div>
              <div className="w-1/6 mr-5">
                <button
                  data-id={item.id}
                  onClick={() => handleDelete(item.id)}
                  className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded`}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <form className="m-6" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            NAME
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={name.value}
            onChange={name.onChange}
            // value={id}
            // onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-800"
          >
            AGE
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={age.value}
            onChange={age.onChange}
            // value={pw}
            // onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            EMAIL
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={email.value}
            onChange={email.onChange}
            // value={pw}
            // onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-800"
          >
            ADDRESS
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={address.value}
            onChange={address.onChange}
            // value={pw}
            // onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            SAVE
          </button>
        </div>
      </form>
    </>
  )
}
