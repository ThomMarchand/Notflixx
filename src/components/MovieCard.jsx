import { useEffect, useState } from "react";
import axios from "axios";
import { compareTwoData } from "../function/compareTwoData";
import MovieGenre from "./MovieGenre";
import LikeButton from "./LikeButton";

const MovieCard = ({ eachMovie, genre }) => {
  // console.log("genre :", genre);
  const [AllGenres, setAllGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9093f808553ef07633a201098e8b95c2&language=fr-FR"
      )
      .then((res) => setAllGenres(res.data.genres));
  }, []);

  const reverseDate = /(\d{4})[-. \/](\d\d)[-. \/](\d\d)/;
  try {
    const dysplayGenres = () => {
      if (genre === "genre_ids") {
        let convertesMovieGenre = compareTwoData(
          AllGenres,
          eachMovie.genre_ids
        );

        return convertesMovieGenre.map((eachGenre, index) => (
          <MovieGenre key={index} eachGenre={eachGenre} />
        ));
      } else {
        return genre.map((eachGenre, index) => (
          <MovieGenre key={index} eachGenre={eachGenre.name} />
        ));
      }
    };

    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/original${eachMovie.backdrop_path}`}
          alt={`Poster de ${eachMovie.title}`}
        />
        <h3>{eachMovie.title}</h3>
        <p>
          Sorti le : {eachMovie.release_date.replace(reverseDate, "$3-$2-$1")}
        </p>
        <h3>{Math.round(eachMovie.vote_average * 100) / 100}/10</h3>
        <ul>{dysplayGenres()}</ul>
        <h3>Synopsis</h3>
        <p>{eachMovie.overview}</p>
        <LikeButton id={eachMovie.id} title={eachMovie.title} />
      </div>
    );
  } catch (error) {
    // console.log(error);
  }
};

export default MovieCard;
