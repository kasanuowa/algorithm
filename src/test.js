Function.prototype.myCall = function (obj, ...args) {
  if (typeof obj !== "object") {
    throw new Error("xxx");
  }
  const fn = Symbol();
  obj[fn] = this;
  const res = obj[fn](...args);
  delete obj[fn];
  return res;
};

Function.prototype.myBind = function (obj, ...args) {
  if (typeof obj !== "object") {
    throw new Error("xxx");
  }
  const _this = this;
  return function () {
    _this.call(obj, ...args);
  };
};

Function.prototype.myNew = function (Construe) {
  if (typeof Construe !== "object") {
    throw new Error("xxx");
  }
  const obj = Object.create(Construe.prototype);
  const args = [].slice.call(arguments, 1);
  const res = Construe.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFn = typeof res === "function";
  if (isObject || isFn) {
    return res;
  }
  return obj;
};

const myInstanceOf = (obj, Construe) => {
  const baseType = ["string", "number", "boolean", "undefined", "symbol"];
  if (baseType.includes(typeof obj)) {
    return false;
  }

  let _pro_ = Object.getPrototypeOf(obj);
  let pro = Construe.prototype;
  while (true) {
    if (_pro_ === null) {
      return false;
    }
    if (_pro_ === pro) {
      return true;
    }
    _pro_ = Object.getPrototypeOf(_pro_);
  }
};
