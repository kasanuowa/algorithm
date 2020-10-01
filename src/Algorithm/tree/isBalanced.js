/**
 * 检查平衡性
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true;
  const helper = (node) => {
    if (!node) return 0;
    const left = helper(node.left) + 1;
    const right = helper(node.right) + 1;
    if (Math.abs(left - right) > 1) {
      res = false;
    }
    return Math.max(left, right);
  };
  helper(root);
  return res;
};

export default isBalanced;
