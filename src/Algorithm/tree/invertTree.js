/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  const tem = root.left;
  root.left = root.right;
  root.right = tem;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

export default invertTree;
