/**
 * 整数转化
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let ans = A ^ B;
  let res = 0;
  while (ans !== 0) {
    ans &= ans - 1;
    res++;
  }
  return res;
};

export default convertInteger;
