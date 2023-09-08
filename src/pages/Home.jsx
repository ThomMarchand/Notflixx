import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import GetData from "../components/GetData";

const Home = () => {
  return (
    <div className="body-box">
      <div className="header">
        <AppTitle />
        <h2>Accueil</h2>
        <GetData />
      </div>
    </div>
  );
};

export default Home;
