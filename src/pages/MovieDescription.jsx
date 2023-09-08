import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AppTitle from "../components/AppTitle";
import Navigation from "../components/Navigation";

const MovieDescription = () => {
  const idMovie = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie.id}?api_key=9093f808553ef07633a201098e8b95c2&language=fr-FR`
      )
      .then(({ data }) => setMovie(data));
  }, []);

  try {
    return (
      <div className="body-box">
        <div className="header">
          <AppTitle />
          <Navigation />
          <h1>{movie.title}</h1>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default MovieDescription;
