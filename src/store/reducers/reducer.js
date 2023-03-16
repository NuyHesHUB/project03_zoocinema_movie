import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movieloading: false,
    movies:[]
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){

        case actionTypes.MOVIE_LOADING:
            return{
                ...state,
                movieloading: true,
                movies:[],
            }
    }
}

export default reducer;