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
    reducer(state, action);
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
