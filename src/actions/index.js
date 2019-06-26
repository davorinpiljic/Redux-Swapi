// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
export const SWAPI_FETCH = 'SWAPI_FETCH'
export const SWAPI_SUCCESS = 'SWAPI_SUCCESS'
export const SWAPI_FAIL = 'SWAPI_FAIL'
// one for fetching, one for success and one for failure


export const swapiThunk = () => dispatch => {
    dispatch({type: SWAPI_FETCH})
    axios
        .get("https://swapi.co/api/people/?format=json") 
        .then(response => dispatch({type: SWAPI_SUCCESS, payload: response.data.results}))
        .catch(error => dispatch({type: SWAPI_FAIL, payload: error.message}) )
}
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
