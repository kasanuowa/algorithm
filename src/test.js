const greedy = (g, s) => {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);
  let cookie = 0;
  let child = 0;
  let num = 0;
  while (cookie < g.length && child < s.length) {
    if (g[cookie] <= s[child]) {
      num++;
      child++;
    }
    cookie++;
  }
  return num;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const rebuildTree = (pre, mid) => {
  if (!pre) {
    return null;
  }
  const root = pre[0];
  if (pre.length === 1) {
    return new TreeNode(root);
  }
  const index = mid.indexOf(root);
  const preLeft = pre.slice(1, index + 1);
  const preRight = pre.slice(index + 1);
  const midLeft = mid.slice(0, index);
  const midRight = mid.slice(index + 1);
  const node = new TreeNode(root);
  node.left = rebuildTree(preLeft, midLeft);
  node.right = rebuildTree(preRight, midRight);
  return node;
};
