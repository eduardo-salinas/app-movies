import axios from "axios";

export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";
export const GET_MOVIES = "GET_MOVIES";
export const LOADING = "LOADING";

const URL = process.env.REACT_APP_API_KEY;




export const addMovieFavorite = (payload) => {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export const removeMovieFavorite = (id) => {
    return { type: REMOVE_MOVIE_FAVORITE, payload: id };
}

export const getMovies = (title, page) => { //busco peliculas por titulo
    return async (dispatch) => {
        dispatch({ type: LOADING });
        console.log ("apii----------", URL)
        try {
            const movies = await axios.get(`${URL}&s=${title}&page=${page}`)
            return movies.data.Response === "False" ?
                dispatch({ type: GET_MOVIES, payload: { Search: [{ err: "Movie not found" }] } }) :
                dispatch({ type: GET_MOVIES, payload: movies.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_MOVIES, payload: { Search: [{ err: "Server response error" }] } });
        }

    };
}

export const getMovieDetail = (id) => { //busco pelicula por id y me trae sus detalles
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const movie = await axios.get(`${URL}&i=` + id)
            return movie.data.Response === "False" ?
                dispatch({ type: GET_MOVIES_DETAIL, payload: { err: "Movie not found" } }) :
                dispatch({ type: GET_MOVIES_DETAIL, payload: movie.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_MOVIES_DETAIL, payload: { err: "Server response error" } });
        }
    };
}
