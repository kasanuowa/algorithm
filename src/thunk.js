const createThunk = () => {
  return (dispatch, state) => (next) => (action) => {
    if (typeof action === "function") {
      return dispatch(action, state);
    }
    return next(action);
  };
};

const thunk = createThunk();

export default thunk;
