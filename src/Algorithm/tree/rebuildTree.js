function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function rebuild(pre, vin) {
  if (!pre.length) {
    return null;
  }
  const val = pre[0];
  if (pre.length === 1) {
    return new TreeNode(val);
  }
  const index = vin.indexOf(val);
  const vinLeft = vin.slice(0, index);
  const vinRight = vin.slice(index + 1);
  const preLeft = pre.slice(1, index + 1);
  const preRight = pre.slice(index + 1);
  const node = new TreeNode(val);
  node.left = rebuild(preLeft, vinLeft);
  node.right = rebuild(preRight, vinRight);
  return node;
}

export default rebuild;
