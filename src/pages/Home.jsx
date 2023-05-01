import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import GetData from "../components/GetData";

const Home = () => {
  return (
    <div className="body-box">
      <div className="header">
        <Navigation />
        <AppTitle />
        <h2>Acceuil</h2>
        <GetData show={"show"} />
      </div>
    </div>
  );
};

export default Home;
