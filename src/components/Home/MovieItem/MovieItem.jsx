import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addMovieFavorite } from "../../../redux/actions";
import { FcRating } from "react-icons/fc";
import { StyledMovie } from "../styled.js";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

const MovieItem = ({ id, title, img, movie }) => {
    const [fav, setFav] = useState(false);
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        store.moviesFavorites.map(movie => movie.imdbID === id ? setFav(true) : false);
    }, [dispatch, store.moviesFavorites, id]);

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
            <Card border="danger" key={`id ${id}`} style={{ width: '22rem' }}>
                <NavLink className="title" to={`/movie/${id}`}>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </NavLink>
                <Card.Img variant="bottom" src={img} alt="notfound" />
                <Card border="danger">
                <Card.ImgOverlay>
                    <button className="btn" onClick={handleClick}>
                        {fav ? <FcRating className="infav" /> :
                            <FcRating className="favorite" />}
                    </button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </Card.ImgOverlay>
                </Card>
            </Card>
        </StyledMovie>
    )
};

export default MovieItem;