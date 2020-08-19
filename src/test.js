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

Function.prototype.myNew = function (Construe, ...args) {
  let obj = Object.create(Construe.prototype);
  let res = Construe.call(obj, ...args);
  const isObj = typeof res === "object" && res !== null;
  const isFn = typeof res === "function";
  if (isObj || isFn) {
    return res;
  }
  return obj;
};
