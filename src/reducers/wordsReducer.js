import { GET_WORDS } from '../actions/actionTypes'

const initialState = { collection: [], success: false }

const words = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case GET_WORDS:
      newState = { collection: action.collection, success: action.success }

      return newState
    default:
      return state
  }
}

export default words
