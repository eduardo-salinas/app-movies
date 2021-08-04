import {
    ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIES_DETAIL, LOADING, REMOVE_MOVIE_FAVORITE
} from "../actions";

const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {},
    loading: false
};

function rootReducer(state = initialState, { payload, type }) {
    switch (type) {
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.concat(payload)
            };
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.imdbID !== payload)
            };
        case GET_MOVIES:
            return {
                ...state,
                loading: false,
                moviesLoaded: payload.Search
            };
        case GET_MOVIES_DETAIL:
            return {
                ...state,
                loading: false,
                movieDetail: payload
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

export default rootReducer;