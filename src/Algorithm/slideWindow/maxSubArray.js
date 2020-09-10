/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - min > max) max = sum - min;
    if (min > sum) {
      min = sum;
    }
  }

  return max;
};

export default maxSubArray;
