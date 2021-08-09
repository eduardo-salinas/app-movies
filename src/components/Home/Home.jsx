import React from "react";
import { useSelector } from "react-redux";
import load from "../../assets/tenor.gif"
import Search from "./Search/Search";
import MovieItem from "./MovieItem/MovieItem";
import StyledHome from "./styled.js";

const Home = () => {
    const store = useSelector(state => state);

    return (
        <StyledHome>
            <div className="text-center">
                <Search />
                {store.loading ? <img src={load} alt="loading" /> :
                    (<div className="all">
                        {store.moviesLoaded.length > 0 &&
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {store.moviesLoaded.map(movie => 
                                    movie.err ? <div>{movie.err}</div> :
                                        <MovieItem
                                            id={movie.imdbID}
                                            title={movie.Title}
                                            img={movie.Poster}
                                            movie={movie}
                                        />
                                )}
                            </div>}
                    </div>
                    )}
            </div>
        </StyledHome>
    )
};

export default Home;