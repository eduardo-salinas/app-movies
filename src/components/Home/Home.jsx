import React, { useState } from "react";
import { useSelector } from "react-redux";
import load from "../../assets/tenor.gif"
import err from "../../assets/error.gif"
import Search from "./Search/Search";
import MovieItem from "./MovieItem/MovieItem";
import { StyledHome } from "./styled.js";
import Paginate from "./Paginate/Paginate";

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState("")
    const store = useSelector(state => state);

    return (
        <StyledHome>
            <div className="text-center">
                <Search setPageNumber={setPageNumber} setSearch={setSearch} />
                {store.loading ? <img src={load} alt="loading" /> :
                    (<div className="all">
                        {store.moviesLoaded.length > 0 && (
                            store.moviesLoaded[0].err ? (
                                <div className="error">
                                    <img src={err} alt="error" />
                                    <div>{store.moviesLoaded[0].err}</div>
                                </div>) :
                                <>
                                    <div className="paginate">
                                        <Paginate
                                            pageNumber={pageNumber}
                                            search={search}
                                            setPageNumber={setPageNumber}
                                        />
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {store.moviesLoaded.map(movie =>
                                            <MovieItem
                                                id={movie.imdbID}
                                                title={movie.Title}
                                                img={movie.Poster}
                                                movie={movie}
                                            />
                                        )}
                                    </div>
                                </>
                        )}
                    </div>
                    )}
            </div>
        </StyledHome >
    )
};

export default Home;