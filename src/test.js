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

const MyPromise = function (executor) {
  this.status = "PENDING";
  this.value = null;
  this.reason = null;

  this.resolves = [];
  this.rejects = [];

  this.resolve = value => {
    if (this.status === "PENDING") {
      this.status = "RESOLVE";
      this.value = value;
    }
    while (this.resolves.length) {
      const tem = this.resolves.shift();
      tem(value);
    }
  };

  this.reject = reason => {
    if (this.status === "PENDING") {
      this.status = "REJECT";
      this.reason = reason;
    }
    while (this.rejects.length) {
      const tem = this.rejects.shift();
      tem(reason);
    }
  };

  this.then = (resolve, reject) => {
    resolve = typeof resolve === "function" ? resolve : val => val;
    reject =
      typeof reject === "function"
        ? reject
        : error => {
            throw new Error(error);
          };

    return new MyPromise((resolveFn, rejectFn) => {
      const fulfilled = value => {
        try {
          const res = resolve(value);
          res instanceof MyPromise
            ? MyPromise(resolveFn, rejectFn)
            : resolveFn(value);
        } catch (error) {
          reject(error);
        }
      };

      const rejected = reason => {
        try {
          const res = reject(reason);
          res instanceof MyPromise
            ? MyPromise(resolveFn, rejectFn)
            : rejectFn(reason);
        } catch (error) {
          reject(error);
        }
      };

      switch (this.status) {
        case "RESOLVE":
          fulfilled(this.value);
          break;
        case "REJECT":
          rejected(this.reason);
          break;
        case "PENDING":
        default:
          this.resolves.push(fulfilled);
          this.rejects.push(rejected);
          break;
      }
    });
  };

  try {
    executor(this.resolve, this.reject);
  } catch (error) {
    this.rejects.push(error);
  }
};
