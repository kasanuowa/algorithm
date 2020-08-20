const greedy = (arr1, arr2) => {
  let peopleArr = arr1.sort((a, b) => b - a);
  let cookieArr = arr2.sort((a, b) => b - a);
  let count = 0,
    child = 0,
    cookie = 0;
  while (cookie < cookieArr.length && child < peopleArr.length) {
    if (peopleArr[child] <= cookieArr[cookie]) {
      count++;
      child++;
    }
    cookie++;
  }
  return count;
};

export default greedy;
