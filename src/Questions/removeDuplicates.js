/**
 * 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

export default removeDuplicates;
