import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation d-flex flex-colum justify-content-center align-items-center">
      <h2>
        <Link to={"/"}>Accueil</Link>
      </h2>
    </div>
  );
};

export default Navigation;
