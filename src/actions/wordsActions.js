import { API_URL } from '../utils/constants'
import { GET_WORDS } from './actionTypes'

const WORDS_URL = `${API_URL}/words?status=unknown`

export const getWords = () => {
  return (dispatch) => {
    return fetch(WORDS_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({
        type: GET_WORDS,
        collection: json.collection,
        success: true,
      }))
  }
}
