import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../redux/actions";

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
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Movie: </label>
                    <input
                        className="form-control"
                        placeholder="Search Movie"
                        type="text"
                        id="title"
                        autoComplete="off"
                        value={input.title}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark">Go</button>
            </form>
            <ul>
                {store.moviesLoaded && store.moviesLoaded.map(movie =>
                    <div key={`id ${movie.imdbID}`}>
                        <Link to={`/movie/${movie.imdbID}`}>
                            <span>{movie.Title}</span>
                        </Link>
                        <button onClick={() => dispatch(addMovieFavorite(movie))}>
                            FAVORITES
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
};

export default Search;