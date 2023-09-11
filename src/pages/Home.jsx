import Navigation from "../components/Navigation";
import AppTitle from "../components/AppTitle";
import GetData from "../components/GetData";

const Home = () => {
  return (
    <div className="body-box">
      <div className="header">
        <AppTitle />
        <h2 className="d-flex flex-colum justify-content-center align-items-center">
          Accueil
        </h2>
        <GetData />
      </div>
    </div>
  );
};

export default Home;
