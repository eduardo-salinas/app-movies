import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Favorites = () => {
    const store = useSelector(state => state);
    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {store.moviesFavorites && store.moviesFavorites.map(movie =>
                    <div>
                        <Link to={`/movie/${movie.imdbID}`}>
                            <span>{movie.Title}</span>
                        </Link>
                    </div>)}
            </ul>
        </div>
    )
};

export default Favorites;