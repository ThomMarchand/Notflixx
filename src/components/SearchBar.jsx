import { useState } from "react";
import MovieBox from "../components/MovieBox";

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
            type="text"
            placeholder="Entrez le nom d'un film"
            onChange={onChange}
          />
          <button type="submit" id="submit" onClick={(e) => handleClick(e)}>
            Rechercher
          </button>
        </form>
        <div className="filter-buttons">
          <button className="top" id="top" onClick={(e) => handleClick(e)}>
            Top
          </button>
          <button className="flop" id="flop" onClick={(e) => handleClick(e)}>
            Flop
          </button>
        </div>
      </div>
      <div className="section-movie-box">
        <MovieBox idBtn={idBtn} />
      </div>
    </>
  );
};

export default SearchBar;
