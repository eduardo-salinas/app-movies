import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addMovieFavorite } from "../../../redux/actions";
import { FcRating } from "react-icons/fc";
import StyledMovie from "./styled.js";

const MovieItem = ({ id, title, img, movie }) => {
    const dispatch = useDispatch();

    return (
        <StyledMovie>
            <div class="card text-white bg-danger mb-3">
                <NavLink to={`/movie/${id}`}>
                    <h5 className="card-header">
                        {title}
                    </h5>
                </NavLink>
                <div key={`id ${id}`} className="card h-100">
                    <img src={img} className="card-img" alt="notfound" />
                    <div class="card-img-overlay">
                        <button className="btn" onClick={() => dispatch(addMovieFavorite(movie))}>
                            <FcRating className="favorite" />
                        </button>
                    </div>
                </div>
            </div>
        </StyledMovie>
    )
};

export default MovieItem;