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
          <div>
            <h1 className="d-flex flex-colum justify-content-center align-items-center">
              {movie.title}
            </h1>

            <h3>Titre original : {movie.original_title}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // console.log(error);
  }
};

export default MovieDescription;
