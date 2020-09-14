/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining1 = function (n, m) {
  let arr = [...Array(n).keys()];
  let index = 0;
  while (arr.length > 1) {
    index = (index + m - 1) % arr.length;
    arr.splice(index, 1);
  }
  return arr[0];
};

var lastRemaining2 = function (n, m) {
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};

export default { lastRemaining1, lastRemaining2 };
