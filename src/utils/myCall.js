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

Function.prototype.myBind = function (Content, ...args) {
  const _this = this;
  return function () {
    _this.call(Content, ...args);
  };
};
