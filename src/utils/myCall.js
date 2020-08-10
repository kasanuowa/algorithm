Function.prototype.myCall = function (Content, ...args) {
  if (this === Function.prototype) {
    return null;
  }
  const fn = Symbol();
  Content[fn] = this;
  let res = Content[fn](...args);
  delete Content[fn];
  return res;
};
