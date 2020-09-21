// 判定是否为字符串重排

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  return s1.split("").sort().toString() === s2.split("").sort().toString();
};

export default CheckPermutation;
