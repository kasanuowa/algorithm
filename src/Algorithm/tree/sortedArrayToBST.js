/**
 * 最小高度树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length < 1) {
    return null;
  }
  const index = parseInt(nums.length / 2);
  const left = nums.slice(0, index);
  const right = nums.slice(index + 1);
  let res = new TreeNode(nums[index]);
  res.left = sortedArrayToBST(left);
  res.right = sortedArrayToBST(right);
  return res;
};

export default sortedArrayToBST;
