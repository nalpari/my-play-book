import { useMutation, useQuery, useQueryClient } from 'react-query'
import { commonMutate, commonQuery } from '../api/common-api'

export const useSimulationGetSimulations = () => {
  const {
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
  )

  return { simulations, isLoading, error }
}

export const useSimulationAddUser = () => {
  const queryClient = useQueryClient()

  const { mutate: addUserMutate } = useMutation(
    (user) => {
      return commonMutate({
        url: `http://myapi.devgrr.kr/api/1.0/simulation`,
        data: user,
      })
    },
    {
      onSuccess: () => queryClient.invalidateQueries('simulation'),
    },
  )

  return { addUserMutate }
}

export const useSimulationDelUser = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteUserMutate } = useMutation(
    (id) => {
      return commonMutate({
        url: `http://myapi.devgrr.kr/api/1.0/simulation/${id}`,
        method: 'delete',
      })
    },
    {
      onSuccess: () => queryClient.invalidateQueries('simulation'),
    },
  )

  return { deleteUserMutate }
}
