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

const insertSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[current] < array[j]) {
        [array[current], array[j]] = [array[j], array[current]];
        current = j;
      } else {
        break;
      }
    }
  }
  return array;
};

const selectSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        min = j;
      }
    }
    [array[min], array[i]] = [array[i], array[min]];
  }
  return array;
};
