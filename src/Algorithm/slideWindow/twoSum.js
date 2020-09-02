/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const l = nums[left];
    const r = nums[right];
    if (l + r === target) {
      return [l, r];
    } else if (l + r > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

export default twoSum;
