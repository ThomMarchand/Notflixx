const getLocalStorage = () => {
  let getStorage = [];

  for (let value of Object.values(localStorage)) {
    getStorage.push(JSON.parse(value));
  }
  return getStorage;
};

export { getLocalStorage };
