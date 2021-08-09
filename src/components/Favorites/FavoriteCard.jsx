import React from "react";
import { FiTrash2 } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { removeMovieFavorite } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const FavoriteCard = ({ id, title }) => {
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(removeMovieFavorite(id));
        toast.success('Added to favorites!')
    };

    return (
        <>
            <div key={`id ${id}`}>
                <NavLink className="card-header" to={`/movie/${id}`}>
                    <h5 >
                        {title}
                    </h5>
                </NavLink>
                <div  className="card h-100">
                    <button className="btn" onClick={handleClick}>
                        <FiTrash2 />
                    </button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </div>
        </>
    )
};

export default FavoriteCard;