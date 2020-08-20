const slideWindow = target => {
  let l = 1;
  let r = 1;
  let res = [];
  let sum = 0;
  while (l < target / 2) {
    if (sum < target) {
      sum += r;
      r++;
    } else if (sum > target) {
      sum -= l;
      l++;
    } else {
      let arr = [];
      for (let i = l; i < r; i++) {
        arr.push(i);
      }
      res.push(arr);
      sum -= l;
      l++;
    }
  }
  return res;
};
