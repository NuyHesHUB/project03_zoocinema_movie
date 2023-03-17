import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: true,
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.MOVIE_LOADING:
        return {
          ...state,
          loading: false
        }
  
      default: return state;
    }
  }
  
  export default reducer;