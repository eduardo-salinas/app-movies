import React from "react";
import { FiTrash2 } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { removeMovieFavorite } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import StyledFav from "./styled.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

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
            <Card className="favorite" key={`id ${id}`}>
                <Card.Body>
                    <NavLink className="title" to={`/movie/${id}`}>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    </NavLink>
                    <Card.Text><b>Year:</b> {year}</Card.Text>
                    <Card.Text><b>Type:</b> {type}</Card.Text>
                    <Button variant="dark" className="btn" onClick={handleClick}>
                        <FiTrash2 />
                    </Button >
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </Card.Body>
            </Card>
        </StyledFav>
    )
};

export default FavoriteCard;