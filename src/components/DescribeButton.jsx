import { Link } from "react-router-dom";

const LikeButton = ({ id }) => {
  return (
    <button>
      <Link to={`movie/${id}`}>Description du film</Link>
    </button>
  );
};

export default LikeButton;
