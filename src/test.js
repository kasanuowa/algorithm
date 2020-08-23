const rebuildTree = (pre, vin) => {
  if (!pre.length) {
    return null;
  }
  const val = pre[0];
  if (pre.length === 1) {
    return val;
  }
  const target = vin.indexOf(val);
  const leftVin = vin.slice(0, target);
  const rightVin = vin.slice(target + 1);
  const leftPre = pre.slice(1, target + 1);
  const rightPre = pre.slice(target + 1);
  let node = new Tree(val);
  node.left = rebuildTree(leftPre, leftVin);
  node.right = rebuildTree(rightPre, rightVin);
  return node;
};

const greedy = (g, s) => {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);
  let count = 0;
  let child = 0;
  let cookie = 0;
  while (cookie < g.length && child < s.length) {
    if (g[cookie] >= s[child]) {
      count++;
      child++;
    }
    cookie++;
  }
  return count;
};

const slideWindow = (k) => {
  let left = 1;
  let right = 1;
  let sum = 0;
  let res = [];
  while (left < k / 2) {
    if (sum < k) {
      sum += right;
      right++;
    } else if (sum > k) {
      sum -= left;
      left++;
    } else {
      let arr = [];
      for (let index = left; index < right; index++) {
        arr.push(index);
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }
  return res;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
};

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const target = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), target, ...quickSort(right)];
};

const insertSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let maxIndex = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[maxIndex]) {
        [array[j], array[maxIndex]] = [array[maxIndex], array[j]];
        maxIndex = j;
      } else {
        break;
      }
    }
  }
  return array;
};

const selectSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    const min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[min], array[j]] = [array[j], array[min]];
  }
  return array;
};

Function.prototype.myNew = function (Construe) {
  const obj = Object.create(Construe.prototype);
  const args = [].slice.call(arguments, 1);
  const res = Construe.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFn = typeof res === "function";
  if (isObject || isFn) {
    return res;
  } else {
    return obj;
  }
};

Function.prototype.myCall = function (Construe, ...args) {
  if (typeof Construe !== "function") {
    throw new Error("xxx");
  }
  const fn = new Symbol();
  Construe[fn] = this;
  const res = Construe[fn](...args);
  delete Construe[fn];
  return res;
};

const myInstanceOf = (obj, Construe) => {
  let _pro_ = Object.getPrototypeOf(obj);
  while (true) {
    if (_pro_ === null) {
      return false;
    }
    if (_pro_ === Construe.prototype) {
      return true;
    }
    _pro_ = Object.getPrototypeOf(_pro_);
  }
};

const clone = (obj, map = new WeakMap()) => {
  if (typeof obj !== "object" && obj === null) {
    return obj;
  }
  const instance = Array.isArray(obj) ? [] : {};
  if (map.get(obj)) {
    return map[obj];
  }
  map.set(obj, instance);
  for (const key in obj) {
    instance[key] = clone(obj[key], map);
  }
  return instance;
};

const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
};

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const index = Math.floor(array.length / 2);
  const left = array.slice(0, index);
  const right = array.slice(index);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
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
