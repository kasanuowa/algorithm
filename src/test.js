const { arguments, arguments } = require("file-loader");

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return array;
};

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let index = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > index) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return [...quickSort(left), index, ...quickSort(right)];
};

const insertSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] < array[target]) {
        [array[target], array[j]] = [array[j], array[target]];
        target = j;
      } else {
        break;
      }
    }
  }
  return array;
};

const selectSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min_index] > array[j]) {
        min_index = j;
      }
    }
    [array[min_index], array[j]] = [array[j], array[min_index]];
  }
  return array;
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

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let index = Math.floor(array.length / 2);
  let left = array.slice(0, index);
  let right = array.slice(index);
  return mergeSort(mergeSort(left), mergeSort(right));
};

Function.prototype.myCall = function (Construe, ...args) {
  if (this === Function.prototype) {
    return null;
  }
  const s = Symbol();
  Construe[s] = this;
  const res = Construe[s](...args);
  delete Construe[s];
  return res;
};

Function.prototype.myBind = function (Construe, ...args) {
  if (this === Function.prototype) {
    return null;
  }
  const _this = this;
  return function () {
    _this.apply(Construe, ...args);
  };
};

function myNew(Construe) {
  if (typeof Construe !== "function") {
    throw new Error("666");
  }
  const obj = Object.create(Construe.prototype);
  const args = [].slice.apply(arguments, 1);
  const res = Construe.apply(obj, ...args);
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";
  if (isObject || isFunction) {
    return res;
  } else {
    return obj;
  }
}
