const createStore = (reducer, enhancer) => {
  if (typeof enhancer !== undefined) {
    return enhancer(createStore)(reducer);
  }

  let state = null;
  let listeners = [];

  const subScript = listener => {
    listeners.push(listener);
  };
  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(item => item());
  };

  dispatch({});

  return { subScript, getState, dispatch };
};

const createThunk = () => {
  return (dispatch, state) => next => action => {
    if (typeof action === "function") {
      return dispatch(action, state);
    }
    return next(action);
  };
};
const thunk = createThunk();

const bubbleSort = array => {
  for (let index = 0; index < array.length; index++) {
    let flag = true;
    for (let j = 0; j < array.length; j++) {
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

const quickSort = array => {
  if (array.length < 2) {
    return array;
  }
  let target = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), target, ...quickSort(right)];
};

const insertSort = array => {
  for (let i = 0; i < array.length; i++) {
    let maxIndex = array[i];
    for (let j = 1; j >= 0; j--) {
      if (array[j] > array[maxIndex]) {
        [array[j], array[maxIndex]] = [array[maxIndex], array[j]];
        maxIndex = j;
      }
    }
  }
  return array;
};

const greedy = (g, s) => {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);
  let cookie = 0;
  let child = 0;
  let count = 0;
  while (cookie < g.length && child < s.length) {
    if (s[child] <= g[cookie]) {
      count++;
      child++;
    }
    cookie++;
  }
  return count;
};

const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
};

Function.prototype.myNew = function (Construe) {
  const obj = Object.create(Construe.prototype);
  const args = [].slice.call(arguments, 1);
  const res = Construe.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";
  if (isObject && isFunction) {
    return res;
  } else {
    return obj;
  }
};
