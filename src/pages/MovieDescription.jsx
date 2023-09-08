import AppTitle from "../components/AppTitle";
import Navigation from "../components/Navigation";

const MovieDescription = () => {
  return (
    <div className="body-box">
      <div className="header">
        <AppTitle />
        <Navigation />
        <h1>Description du film</h1>
      </div>
    </div>
  );
};

export default MovieDescription;
