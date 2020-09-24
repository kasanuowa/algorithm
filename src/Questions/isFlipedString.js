/**
 * 反转字符串
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  return s1.repeat(2).includes(s2);
};

export default isFlipedString;
