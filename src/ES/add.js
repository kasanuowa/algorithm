/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  return add(a ^ b, (a & b) << 1);
};

export default add;
