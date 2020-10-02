/**
 * 配对交换
 * @param {number} num
 * @return {number}
 */
var exchangeBits1 = function (num) {
  let tem = num.toString(2);
  if (tem.length % 2 !== 0) {
    tem = tem.padStart(tem.length + 1, "0");
  }
  tem = tem.split("");
  for (let i = 0; i < tem.length; i += 2) {
    [tem[i], tem[i + 1]] = [tem[i + 1], tem[i]];
  }
  tem = tem.join("");
  return parseInt(tem, 2);
};

/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits2 = function (num) {
  let even = (num & 0xaaaaaaaa) >> 1;
  let odd = (num & 0x55555555) << 1;
  return even | odd;
};

export default { exchangeBits1, exchangeBits2 };
