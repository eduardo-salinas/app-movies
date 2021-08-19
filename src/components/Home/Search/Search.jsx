import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../redux/actions";
import { BiCameraMovie } from "react-icons/bi";
import {StyledSearch} from "../styled.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from "react-bootstrap";

const Search = ({ setPageNumber, setSearch }) => {
    const [input, setInput] = useState({ title: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput({ title: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies(input.title,1));
        setSearch(input.title);
        setPageNumber(1);
        setInput({ title: "" });
    }

    return (
        <StyledSearch>
                <form onSubmit={handleSubmit} className="d-flex">
                    <FormControl
                        placeholder="Search Movie"
                        type="search"
                        id="title"
                        autoComplete="off"
                        value={input.title}
                        onChange={handleChange}
                    />
                    <Button variant="dark" type="submit"><BiCameraMovie /></Button>
                </form>           
        </StyledSearch>
    )
};

export default Search;