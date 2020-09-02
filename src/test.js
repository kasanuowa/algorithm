const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], [array[j]]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return array;
};

const insertSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[j], array[target]] = [array[target], array[j]];
        target = j;
      } else {
        break;
      }
    }
  }
  return array;
};

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let target = array[0];
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
  return merge(mergeSort(left), mergeSort(right));
};

const selectSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min_index > array[j]]) {
        min_index = j;
      }
    }
    [array[min_index], array[i]] = [array[i], array[min_index]];
  }
  return array;
};

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    const args = [].slice.apply(arguments);
    timer = setTimeout(() => {
      timer && clearTimeout(timer);
      fn(...args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    const args = [].slice.apply(arguments);
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
};

function MyPromise(executor) {
  this.status = "PENDING";
  this.value = null;
  this.reason = null;

  this.resolves = [];
  this.rejects = [];

  this.resolve = (value) => {
    if (this.status === "PENDING") {
      this.status = "RESOLVED";
      this.value = value;
    }
    while (resolves.length) {
      const tem = resolves.shift();
      tem(value);
    }
  };

  this.reject = (reason) => {
    if (this.status === "PENDING") {
      this.status = "REJECTED";
      this.reason = reason;
    }
    while (rejects.length) {
      const tem = rejects.shift();
      tem(value);
    }
  };

  this.then = (resolve, reject) => {
    resolve = typeof resolve === "function" ? resolve : (v) => v;
    reject =
      typeof reject === "function"
        ? reject
        : (e) => {
            throw new Error(e);
          };

    return MyPromise((resolveFn, rejectFn) => {
      const fulfilled = (value) => {
        try {
          const res = resolve(value);
          res instanceof MyPromise
            ? MyPromise.then(resolveFn, rejectFn)
            : resolveFn(res);
        } catch (error) {
          reject(error);
        }
      };

      const rejected = (reason) => {
        try {
          const res = reject(reason);
          res instanceof MyPromise
            ? MyPromise.then(resolveFn, rejectFn)
            : rejectFn(res);
        } catch (error) {
          reject(error);
        }
      };

      switch (this.status) {
        case "RESOLVED":
          fulfilled(this.value);
          break;
        case "REJECTED":
          rejected(this.reason);
          break;
        case "PENDING":
        default:
          this.resolves.push(fulfilled);
          this.rejects.push(rejected);
          break;
      }
    });
  };

  try {
    executor(this.resolve, this.reject);
  } catch (error) {
    this.reject(error);
  }
}

const greedy = (g, s) => {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);
  let cookie = 0;
  let child = 0;
  let num = 0;
  while (cookie < g.length && child < s.length) {
    if (g[cookie] >= s[child]) {
      child++;
      num++;
    }
    cookie++;
  }
  return num;
};

var cuttingRope = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let a = ~~(n / 3);
  let b = n % 3;
  if (b === 0) return Math.pow(3, a);
  if (b === 1) return Math.pow(3, a - 1) * 4;
  if (b === 2) return Math.pow(3, a) * 2;
};

const findContinuousSequence = (target) => {
  let l = 1;
  let r = 1;
  let res = [];
  let sum = 0;
  while (l < target / 2) {
    if (sum < target) {
      sum += r;
      r++;
    }
    if (sum > target) {
      sum -= l;
      l++;
    }
    if (sum === target) {
      let tem = [];
      for (let i = l; l < r; i++) {
        tem.push(i);
      }
      res.push(tem);
      sum -= l;
      l++;
    }
    return res;
  }
};
