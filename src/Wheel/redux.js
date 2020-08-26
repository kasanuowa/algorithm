const createStore = (reducer, enhancer) => {
  if (typeof enhancer !== undefined) {
    return enhancer(createStore)(reducer);
  }

  let state = null;
  let listeners = [];

  let subscript = listener => {
    listeners.push(listener);
  };

  let getState = () => state;

  let dispatch = action => {
    state = reducer(action, state);
    listeners.forEach(listener => listener());
  };

  dispatch({});

  return { getState, dispatch, subscript };
};
