import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieFavorite, getMovieDetail } from '../../redux/actions';
import load from "../../assets/tenor.gif"
import toast, { Toaster } from 'react-hot-toast';
import { FcRating } from 'react-icons/fc';
import StyledMovie from "./styled.js";

const Movie = ({ match }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const [favDetail, setFavDetail] = useState(false);

    useEffect(() => {
        dispatch(getMovieDetail(match.params.id))
    }, [dispatch]);
    useEffect(() => {
        store.moviesFavorites.map(movie => movie.imdbID === match.params.id ?
            setFavDetail(true) : false);
        return () => setFavDetail(false);
    }, [dispatch, store.moviesFavorites]);

    const handleClick = () => {
        if (favDetail) {
            toast.error("Is already in favorites.")
        } else {
            dispatch(addMovieFavorite(store.movieDetail))
            toast.success('Added to favorites!')
        }
    };

    return (
        <StyledMovie>
            {store.loading ?
                <img src={load} alt="loading" />
                :
                (
                    store.movieDetail.err ? <h5>{store.movieDetail.err}</h5> :
                        <div className="detail">
                            <img
                                src={store.movieDetail.Poster}
                                alt="not found"
                            />
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{store.movieDetail.Title}</h5>
                                    <br />
                                    <h4 className="card-text">⭐<b>Rating in Imdb:</b> {store.movieDetail.imdbRating}</h4>
                                    <h4 className="card-text">🗓<b>Year:</b> {store.movieDetail.Year}</h4>
                                    <h4 className="card-text">🎞<b>Genre:</b> {store.movieDetail.Genre}</h4>
                                    <h4 className="card-text">👨‍🎨<b>Writer:</b> {store.movieDetail.Writer}</h4>
                                    <h4 className="card-text">👨‍🎤<b>Actors:</b> {store.movieDetail.Actors}</h4>
                                    <h4 className="card-text">⌛<b>RunTime:</b> {store.movieDetail.Runtime}</h4>
                                    <p className="card-title"><b>Resume</b> <br /> {store.movieDetail.Plot}</p>
                                    <br />
                                    <h4 className="card-text">🏆Awards: {store.movieDetail.Awards}</h4>
                                    <br />
                                    <div className="card-img-overlay">
                                        <button className="btn" onClick={handleClick}>
                                            {favDetail ? <FcRating className="infav" /> :
                                                <FcRating className="favorite" />}
                                        </button>
                                        <Toaster
                                            position="top-center"
                                            reverseOrder={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
        </StyledMovie>
    )
};

export default Movie;