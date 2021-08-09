import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addMovieFavorite } from "../../../redux/actions";
import { FcRating } from "react-icons/fc";
import StyledMovie from "./styled.js";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MovieItem = ({ id, title, img, movie }) => {
    const [fav, setFav] = useState(false);
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        store.moviesFavorites.map(movie => movie.imdbID === id ? setFav(true) : false);
    }, [dispatch, store.moviesFavorites]);

    const handleClick = () => {
        if (fav) {
            toast.error("Is already in favorites.")
        } else {
            dispatch(addMovieFavorite(movie))
            toast.success('Added to favorites!')
        }
    };

    return (
        <StyledMovie>
            <div class="card text-white bg-danger mb-3">
                <NavLink className="card-header" to={`/movie/${id}`}>
                    <h5 >
                        {title}
                    </h5>
                </NavLink>
                <div key={`id ${id}`} className="card h-100">
                    <img src={img} className="card-img" alt="notfound" />
                    <div class="card-img-overlay">
                        <button className="btn" onClick={handleClick}>
                            {fav ? <FcRating className="infav" /> :
                                <FcRating className="favorite" />}
                        </button>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </div>
        </StyledMovie>
    )
};

export default MovieItem;