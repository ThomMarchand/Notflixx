import { Link } from "react-router-dom";

import MovieDescription from "../pages/MovieDescription";

const LikeButton = ({ id }) => {
  return (
    <button>
      <Link to={"movie"}>Description du film</Link>
    </button>
  );
};

export default LikeButton;
