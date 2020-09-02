/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let a = ~~(n / 3);
  if (n % 3 === 0) return Math.pow(3, a);
  if (n % 3 === 1) return Math.pow(3, a - 1) * 4;
  if (n % 3 === 2) return Math.pow(3, a) * 2;
};

export default cuttingRope;
