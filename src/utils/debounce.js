const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    const args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export default debounce;
