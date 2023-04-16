import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/like"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Coup de coeurs</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
