import { useState } from "react";
import MovieBox from "../components/MovieBox";

/**
 *
 * @param {string} value* value of user search
 * @param {string} onChange* call my function in my parent component for update state userSearch
 * @returns
 */
const SearchBar = ({ value, onChange }) => {
  const [idBtn, setIdBtn] = useState("");

  const handleClick = (e) => {
    setIdBtn(e.target.id);
  };

  return (
    <>
      <div className="searchbar-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={value}
            className="form-control"
            type="text"
            placeholder="Entrez le nom d'un film"
            onChange={onChange}
          />
          <div className="filter-buttons btn-group">
            <button
              className="top btn btn-primary btn-sm "
              id="top"
              onClick={(e) => handleClick(e)}
            >
              Top
            </button>
            <button
              className="flop btn btn-primary btn-sm"
              id="flop"
              onClick={(e) => handleClick(e)}
            >
              Flop
            </button>
          </div>
        </form>
      </div>
      <div className="section-movie-box">
        <MovieBox idBtn={idBtn} />
      </div>
    </>
  );
};

export default SearchBar;
