/**
 * 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function (prices) {
  let res = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    let target = prices[i];
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > target) {
        res = Math.max(res, prices[j] - target);
      }
    }
  }
  return res > 0 ? res : 0;
};

var maxProfit2 = function (prices, max = 0) {
  return prices.reduce(
    (p, v) => [v < p[0] ? v : p[0], Math.max(p[1], v - p[0])],
    [Infinity, 0]
  )[1];
};

export { maxProfit1, maxProfit2 };
