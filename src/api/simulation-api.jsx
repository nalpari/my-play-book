import axios from 'axios'
import { useQueryClient } from 'react-query'

export const getSimulationList = async () => {
  return await axios
    .get(`http://myapi.devgrr.kr/api/1.0/simulation`)
    .then((res) => res.data)
}

export const delUser = async (id) => {
  return await axios
    .delete(`http://myapi.devgrr.kr/api/1.0/simulation/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const delUserSuccess = (key) => {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries(key)
}
