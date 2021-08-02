import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/actions';

const Movie = ({match}) =>{
    const dispatch = useDispatch();
    const store=useSelector (state=>state);
    useEffect(()=>{
        dispatch(getMovieDetail(match.params.id))
    },[dispatch]);

    return (
        <div className="card">
            {store.loading ? <h2> Loading ... </h2> :
            <div>
                <h4>{store.movieDetail.Title}</h4>
                <h4>{store.movieDetail.Year}</h4>
                <h4>{store.movieDetail.Plot}</h4>
            </div>                
            }
        </div>
    )
};

export default Movie;