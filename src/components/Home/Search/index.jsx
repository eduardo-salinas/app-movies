import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  getMovies } from "../../../redux/actions";
import { BiCameraMovie } from "react-icons/bi";
import StyledSearch from "./styled.js";

const Search = () => {
    const [input, setInput] = useState({ title: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput({ title: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies(input.title));
    }

    return (
        <StyledSearch>
                <div className="container-fluid">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input
                            className="form-control me-2"
                            placeholder="Search Movie"
                            type="search"
                            id="title"
                            autoComplete="off"
                            value={input.title}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-outline-dark"><BiCameraMovie/></button>
                    </form>
                </div>
        </StyledSearch>
    )
};

export default Search;