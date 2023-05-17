import { HANDLE_CHANGE, CLEAR_VALUES, GET_SPK_BEGIN, GET_SPK_SUCCESS, CLEAR_FILTERS } from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === GET_SPK_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      jobLocation: state.userLocation,
      jobType: 'full-time',
      status: 'pending'
    }

    return {
      ...state,
      ...initialState
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest'
    }
  }

  if (action.type === GET_SPK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      allSpk: action.payload.allSpk
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer
