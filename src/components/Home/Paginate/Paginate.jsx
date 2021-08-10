import React from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../redux/actions";
import { StyledPag } from "../styled";

const Paginate = ({ pageNumber, setPageNumber, search }) => {
    const dispatch = useDispatch();
    const handleClick = (value) => {
        setPageNumber(value);
        dispatch(getMovies(search, value));
    };
    return (
        <StyledPag>
            <nav>
                <ul className="pagination">
                    {pageNumber <= 1 ?
                        <li class="page-item disabled">
                            <button className="page-link" href="#" tabindex="-1"><span >&laquo;</span></button>
                        </li> :
                        <li className="page-item">
                            <button onClick={() => handleClick(pageNumber - 1)} className="page-link" >
                                <span >&laquo;</span>
                            </button>
                        </li>
                    }
                    {pageNumber >= 5 &&
                        <>
                            <li className="page-item"><button onClick={() => handleClick(1)} className="page-link" >1</button></li>
                            <li className="page-item"><button className="page-link" > ... </button></li>
                        </>
                    }
                    <li class="page-item disabled">
                        <button className="page-link" href="#" tabindex="-1"><span >{pageNumber}</span></button>
                    </li>
                    <li className="page-item"><button onClick={() => handleClick(pageNumber + 1)} className="page-link" >{pageNumber + 1}</button></li>
                    <li className="page-item"><button onClick={() => handleClick(pageNumber + 2)} className="page-link" >{pageNumber + 2}</button></li>
                    <li className="page-item"><button onClick={() => handleClick(pageNumber + 3)} className="page-link" >{pageNumber + 3}</button></li>
                    <li className="page-item">
                        <button onClick={() => handleClick(pageNumber + 1)} className="page-link" >
                            <span >&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </StyledPag>
    )
};

export default Paginate;