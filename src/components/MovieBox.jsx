import MovieCard from "./MovieCard";

const MovieBox = ({ allMovies, idBtn }) => {
  const renderContent = () => {
    if (idBtn === "top") {
      return allMovies
        .sort((a, b) => b.vote_average - a.vote_average)
        .map((eachMovie) => (
          <MovieCard
            key={eachMovie.id}
            eachMovie={eachMovie}
            genre={"genre_ids"}
          />
        ));
    } else if (idBtn === "flop") {
      return allMovies
        .sort((a, b) => a.vote_average - b.vote_average)
        .map((eachMovie) => (
          <MovieCard
            key={eachMovie.id}
            eachMovie={eachMovie}
            genre={"genre_ids"}
          />
        ));
    } else {
      return allMovies.map((eachMovie) => (
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
