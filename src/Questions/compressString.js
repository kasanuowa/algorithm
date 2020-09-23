/**
 * 字符串压缩
 * @param {string} S
 * @return {string}
 */

var compressString = function (S) {
  let count = 1;
  let str = "";
  for (let i = 1; i < S.length + 1; i++) {
    if (S[i - 1] === S[i]) {
      count++;
    } else {
      str += S.slice(i - 1, i) + count;
      count = 1;
    }
  }
  return S.length > str.length ? str : S;
};

export default compressString;
