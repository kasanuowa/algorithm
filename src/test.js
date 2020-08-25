Function.prototype.myCall = function (Construe, ...args) {
  if (typeof Construe !== "object") {
    throw new Error("6666");
  }
  const fn = Symbol();
  Construe[fn] = this;
  const res = Construe[fn](...args);
  delete Construe[fn];
  return res;
};

Function.prototype.myBind = function (Construe, ...args) {
  if (typeof Construe !== "object") {
    throw new Error("6666");
  }
  const _this = this;
  return function () {
    _this.call(Construe, ...args);
  };
};

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }
  let index = Math.floor(array.length / 2);
  let left = array.slice(0, index);
  let right = array.slice(index);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
};

const slideWindow = k => {
  let left = 1;
  let right = 1;
  let sum = 0;
  const res = [];
  while (left < k / 2) {
    if (sum < k) {
      sum += right;
      right++;
    } else if (sum > k) {
      sum -= left;
      left++;
    } else {
      const tem = [];
      for (let i = left; i < right; i++) {
        tem.push(i);
      }
      res.push(tem);
      sum -= left;
      left++;
    }
  }
  return res;
};
