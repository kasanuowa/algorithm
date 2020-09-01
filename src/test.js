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
