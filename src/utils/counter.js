const counter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

export default counter;
