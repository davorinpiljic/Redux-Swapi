import { SWAPI_FETCH, SWAPI_SUCCESS, SWAPI_FAIL } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAPI_FETCH: 
      return {
        ...state,
      isFetching: true,
      }

    case SWAPI_SUCCESS:
      
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isFetching: false,
      } 
    case SWAPI_FAIL: 
      return {
        ...state,
        isFetching: false,
        error: `get data fail : ${action.payload}`,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
