import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>
        <Link to={"/"}>Accueil</Link>
      </h2>
    </div>
  );
};

export default Navigation;
