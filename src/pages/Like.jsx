import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import MovieCard from "../components/MovieCard";

const Like = () => {
  const [eachMovie, setEachMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/458156?api_key=9093f808553ef07633a201098e8b95c2&language=fr-FR`
      )
      .then((res) => setEachMovie(res.data));
  }, []);
  let temp = [];

  for (let key of Object.keys(localStorage)) {
    temp.push(localStorage.getItem(key));
  }

  console.log(temp);
  return (
    <div className="body-box">
      <Navigation />
      <AppTitle />
      <h2>Coup de coeurs</h2>
      <div className="section-movie-box">
        <MovieCard eachMovie={eachMovie} genre={eachMovie.genres} />
      </div>
    </div>
  );
};

export default Like;
