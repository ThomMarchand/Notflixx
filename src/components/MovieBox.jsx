import { useContext } from "react";
import { allMoviesContext } from "../Context";
import MovieCard from "./MovieCard";

const MovieBox = ({ idBtn }) => {
  const movies = useContext(allMoviesContext);

  const renderContent = () => {
    if (idBtn === "top") {
      return movies
        .sort((a, b) => b.vote_average - a.vote_average)
        .map((eachMovie) => (
          <MovieCard
            key={eachMovie.id}
            eachMovie={eachMovie}
            genre={"genre_ids"}
          />
        ));
    } else if (idBtn === "flop") {
      return movies
        .sort((a, b) => a.vote_average - b.vote_average)
        .map((eachMovie) => (
          <MovieCard
            key={eachMovie.id}
            eachMovie={eachMovie}
            genre={"genre_ids"}
          />
        ));
    } else {
      return movies.map((eachMovie) => (
        <MovieCard
          key={eachMovie.id}
          eachMovie={eachMovie}
          genre={"genre_ids"}
        />
      ));
    }
  };

  return (
    <div className="movie-box">
      <ul>{renderContent()}</ul>
    </div>
  );
};

export default MovieBox;
