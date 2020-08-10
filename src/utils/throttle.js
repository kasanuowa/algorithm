const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
};

export default throttle;
