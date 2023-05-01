import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import { getLocalStorage } from "../function/getLocalStorage";
import GetData from "../components/GetData";

const Like = () => {
  const allMoviesStore = getLocalStorage();

  return (
    <div className="body-box">
      <Navigation />
      <AppTitle />
      <h2>Coup de coeurs</h2>
      <GetData allMoviesStore={allMoviesStore} />
    </div>
  );
};

export default Like;
