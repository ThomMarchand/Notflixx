const compareTwoData = (dataOne, dataTwo) => {
  let dataAfterCompare = [];

  dataOne.map((a) => {
    let matched = dataTwo.filter((b) => a.id == b);

    if (matched.length) {
      dataAfterCompare.push(a.name);
    }
  });

  return dataAfterCompare;
};

export { compareTwoData };
