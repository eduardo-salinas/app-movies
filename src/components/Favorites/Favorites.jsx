import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    const store = useSelector(state => state);
    return (
        <div>
            <h2>Favorite Movies</h2>
            {store.moviesFavorites && store.moviesFavorites.map(movie =>
                <FavoriteCard 
                id={movie.imdbID} 
                title={movie.Title} 
                year={movie.Year} 
                type={movie.Type}/>)}
        </div>
    )
};

export default Favorites;