const LikeButton = ({ id, title }) => {
  const movie = {
    id,
    title,
  };

  const handleClick = () => {
    console.log("glop");
  };
  return (
    <button onClick={() => handleClick()}>Ajouter aux coup de coeurs</button>
  );
};

export default LikeButton;
