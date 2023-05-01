const LikeButton = ({ id, title }) => {
  const movie = {
    id,
    title,
  };

  const handleClick = () => {
    window.localStorage.setItem(id, JSON.stringify(movie));
  };
  return (
    <button onClick={() => handleClick()}>Ajouter aux coup de coeurs</button>
  );
};

export default LikeButton;
