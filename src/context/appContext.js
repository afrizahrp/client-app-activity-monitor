import { useReducer, createContext, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import { HANDLE_CHANGE, GET_SPK_BEGIN, GET_SPK_SUCCESS, CLEAR_VALUES, CLEAR_FILTERS } from './actions'

const initialState = {
  isLoading: false,

  spkTypeOptions: ['Regular', 'eCatalog', 'Service', 'Manual'],
  spkType: 'Regular',
  spkStatusOptions: ['Progress', 'Will Expire', 'Expired', 'Canceled', 'Completed'],
  status_name: 'Progress',
  allSpk: [],
  totalSpk: 0,
  numOfPages: 1,
  page: 1,
  search: '',
  searchStatus: 'All',
  searchType: 'All',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'by name a-z', 'by name z-a']
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const baseURL = process.env.NEXT_PUBLIC_API_URL

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const getAllSpk = async () => {
    const { search, searchStatus, searchType } = state
    let url = `${baseURL}/icspkhd?status_name=${searchStatus}&spk_typeName=${searchType}`

    if (search) {
      url = url + `&search=${search}`
    }

    dispatch({ type: GET_SPK_BEGIN })
    try {
      const { data } = await axios(url)
      const allSpk = data
      dispatch({
        type: GET_SPK_SUCCESS,
        payload: { allSpk }
      })
    } catch (error) {
      console.log('error', error.msg)
    }
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        getAllSpk,
        clearFilters
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
