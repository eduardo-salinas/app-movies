import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieFavorite, getMovieDetail } from '../../redux/actions';
import load from "../../assets/tenor.gif"
import toast, { Toaster } from 'react-hot-toast';
import { FcRating } from 'react-icons/fc';
import StyledMovie from "./styled.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Movie = ({ match }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const [favDetail, setFavDetail] = useState(false);

    useEffect(() => {
        dispatch(getMovieDetail(match.params.id))
    }, [dispatch, match.params.id]);
    useEffect(() => {
        store.moviesFavorites.map(movie => movie.imdbID === match.params.id ?
            setFavDetail(true) : false);
        return () => setFavDetail(false);
    }, [dispatch, store.moviesFavorites, match.params.id]);

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
                            <Card border="danger" style={{ width: '50rem' }}>
                                <Card.Body>
                                <Card.Title>{store.movieDetail.Title}</Card.Title>
                                    <br />
                                    <Card.Text>⭐<b>Rating in Imdb:</b> {store.movieDetail.imdbRating}</Card.Text>
                                    <Card.Text>🗓<b>Year:</b> {store.movieDetail.Year}</Card.Text>
                                    <Card.Text>🎞<b>Genre:</b> {store.movieDetail.Genre}</Card.Text>
                                    <Card.Text>👨‍🎨<b>Writer:</b> {store.movieDetail.Writer}</Card.Text>
                                    <Card.Text>👨‍🎤<b>Actors:</b> {store.movieDetail.Actors}</Card.Text>
                                    <Card.Text>⌛<b>RunTime:</b> {store.movieDetail.Runtime}</Card.Text>
                                    <Card.Text><b>Resume</b> <br /> {store.movieDetail.Plot}</Card.Text>
                                    <br />
                                    <Card.Text>🏆Awards: {store.movieDetail.Awards}</Card.Text>
                                    <br />
                                    <Card.ImgOverlay>
                                        <button className="btn" onClick={handleClick}>
                                            {favDetail ? <FcRating className="infav" /> :
                                                <FcRating className="favorite" />}
                                        </button>
                                        <Toaster
                                            position="top-center"
                                            reverseOrder={false}
                                        />
                                    </Card.ImgOverlay>
                                </Card.Body>
                            </Card>
                        </div>
                )}
        </StyledMovie>
    )
};

export default Movie;