import React from "react";
import { FiTrash2 } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { removeMovieFavorite } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import StyledFav from "./styled.js";

const FavoriteCard = ({ id, title, year, type }) => {
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(removeMovieFavorite(id));
        toast('Delete to Favorites', {
            icon: '♻',
          });
    };

    return (
        <StyledFav>
            <div className="favorite" key={`id ${id}`}>
                <NavLink className="title" to={`/movie/${id}`}>
                    <h5>
                        {title}
                    </h5>
                </NavLink>
                <p><b>Year:</b> {year}</p>
                <p><b>Type:</b> {type}</p>
                <button className="btn" onClick={handleClick}>
                    <FiTrash2 />
                </button>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

            </div>
        </StyledFav>
    )
};

export default FavoriteCard;