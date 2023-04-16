const LikeButton = ({ id, title }) => {
  // const movie = {
  //   id,
  //   title,
  // };

  const handleClick = () => {
    localStorage.setItem(id, id);
  };
  return (
    <button onClick={() => handleClick()}>Ajouter aux coup de coeurs</button>
  );
};

export default LikeButton;

// faire un [] pour stocker
// au click .push l'id dans le []
// ajouter le tableau ds le LS.setItem
