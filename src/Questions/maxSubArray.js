/**
 * 连续数列
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let tem = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (tem < 0) {
      tem = nums[i];
    } else {
      tem += nums[i];
    }
    max = Math.max(tem, max);
  }
  return max;
};

export default maxSubArray;
