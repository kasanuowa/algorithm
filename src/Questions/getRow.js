/**
 * 119. 杨辉三角 II
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }
  let res = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    let tem = [];
    for (let j = 0; j <= i; j++) {
      tem.push((j === 0 ? 0 : res[j - 1]) + (j === i ? 0 : res[j]));
    }
    res = tem;
  }
  return res;
};

export default getRow;
