import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/actions';
import load from "../../assets/tenor.gif"

const Movie = ({ match }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getMovieDetail(match.params.id))
    }, [dispatch]);

    return (
        <div className="text-center">
            {store.loading ?
                <img src={load} alt="loading" />
                :
                <div className="card text-white bg-dark mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{store.movieDetail.Title}</h5>
                        <img
                            src={store.movieDetail.Poster}
                            class="img-fluid rounded-start"
                            alt="not found"
                        /> <br />
                        <h4 class="card-subtitle mb-2 text-muted">{store.movieDetail.Year}</h4>
                        <p className="card-title">{store.movieDetail.Plot}</p>
                    </div>
                </div>
            }
        </div>
    )
};

export default Movie;