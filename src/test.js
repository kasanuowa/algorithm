function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = false;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (flag) {
      break;
    }
  }
  return array;
}

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const target = array[0];
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
}

function myNew(Construe) {
  let obj = Object.create(Construe.prototype);
  let args = arguments.slice(1);
  let res = obj.call(Construe, ...args);
  const isObj = typeof res === "object" && res !== null;
  const isFun = typeof res === "function";
  if (isObj || isFun) {
    return res;
  } else {
    return obj;
  }
}

function myInstanceOf(obj, Construe) {
  let prefab = Object.getPrototypeOf(obj);
  while (true) {
    if (prefab === null) {
      return false;
    }
    if (prefab === Construe.prototype) {
      return true;
    }
    prefab = Object.getPrototypeOf(prefab);
  }
}
