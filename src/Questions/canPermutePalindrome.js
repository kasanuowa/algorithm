/**
 * 回文排列
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (obj[char]) {
      delete obj[char];
    } else {
      obj[char] = 1;
    }
  }
  return Object.keys(obj).length <= 1;
};
