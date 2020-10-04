/**
 * 翻转数位
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  let s = num.toString(2);
  if (s.indexOf("0") === -1) return s.length + 1;
  let arr = s.split("0");
  let max = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    let len = (arr[i] + arr[i + 1]).length;
    max = Math.max(max, len);
  }
  return max + 1;
};

export default reverseBits;
