const { link } = require("fs-extra");

const maxSlidingWindow = (array, k) => {
  if (!array.length) {
    return [];
  }
  const res = [];
  let l_index = 0;
  let r_index = l_index + k;
  while (r_index <= array.length) {
    res.push(Math.max.apply(null, array.slice(l_index, r_index)));
    l_index++;
    r_index++;
  }
  return res;
};
