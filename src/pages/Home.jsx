import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import MovieBox from "../components/MovieBox";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [idBtn, setIdBtn] = useState("");

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9093f808553ef07633a201098e8b95c2&query=${userSearch}&language=fr-FR`
      )
      .then((res) => setAllMovies(res.data.results));
  };

  useEffect(() => getData(), [userSearch]);

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  const handleClick = (e) => {
    setIdBtn(e.target.id);
  };

  return (
    <div className="body-box">
      <div className="header">
        <Navigation />
        <AppTitle />
        <h2>Acceuil</h2>
      </div>
      <div className="searchbar-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={userSearch}
            type="text"
            placeholder="Entrez le nom d'un film"
            onChange={(e) => handleChange(e)}
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
        <MovieBox allMovies={allMovies} idBtn={idBtn} />
      </div>
    </div>
  );
};

export default Home;
