/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  const tem = {};
  for (let i = 0; i < nums.length; i++) {
    if (tem[nums[i]]) {
      tem[nums[i]]++;
    } else {
      tem[nums[i]] = 1;
    }
    if (tem[nums[i]] > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
};

let majorityElement2 = (nums) => {
  let tem = nums.sort((a, b) => a - b);
  return tem[Math.floor(tem.length / 2)];
};

export default { majorityElement1, majorityElement2 };
