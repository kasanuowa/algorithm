const bubbleSort = (array) => {
  for (let index = 0; index < array.length; index++) {
    let flag = true;
    for (let j = 0; j < array.length - 1 - index; j++) {
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
  let target = array[0];
  let left = [];
  let right = [];
  for (let index = 1; index < array.length; index++) {
    if (array[index] < target) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  }
  return [...quickSort(left), target, ...quickSort(right)];
};

const insertSort = (array) => {
  for (let index = 0; index < array.length; index++) {
    let maxIndex = index;
    for (let j = 1; j >= 0; j--) {
      if (array[maxIndex] < array[j]) {
        [array[j], array[maxIndex]] = [array[maxIndex], array[j]];
        maxIndex = j;
      }
    }
  }
  return array;
};

Function.prototype.myCall = function (Construe, ...args) {
  const fn = Symbol();
  Construe[fn] = this;
  const res = Construe[fn](...args);
  delete Construe[fn];
  return res;
};

Function.prototype.myBind = function (Construe, ...args) {
  const _this = this;
  return function () {
    return _this.call(Construe, ...args);
  };
};
