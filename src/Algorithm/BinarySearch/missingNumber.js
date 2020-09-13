/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (i != nums[i]) {
      return i;
    }
  }
  return i;
};

export default missingNumber;
