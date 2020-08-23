const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    const args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;
