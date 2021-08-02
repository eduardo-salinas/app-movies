import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../redux/actions";
import load from "../../assets/tenor.gif"

const Search = () => {
    const [input, setInput] = useState({ title: "" });
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput({ title: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies(input.title));
    }

    return (
        <div>
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
                    <button type="submit" className="btn btn-outline-dark">Go</button>
                </form>
            </div>
            <ul>
                {store.loading ?
                    <div className="text-center">
                        <img src={load} alt="loading" />
                    </div> :
                    (store.moviesLoaded && store.moviesLoaded.map(movie =>
                        <div key={`id ${movie.imdbID}`}>
                            <Link to={`/movie/${movie.imdbID}`}>
                                <span>{movie.Title}</span>
                            </Link>
                            <button onClick={() => dispatch(addMovieFavorite(movie))}>
                                FAVORITES
                            </button>
                        </div>
                    ))}
            </ul>
        </div>
    )
};

export default Search;