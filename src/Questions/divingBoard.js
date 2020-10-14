/**
 * 跳水板
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) {
    return [shorter * k];
  }
  let res = [];
  for (let i = 0; i <= k; i++) {
    const tem = longer * i + shorter * (k - i);
    res.push(tem);
  }
  return res;
};

export default divingBoard;
