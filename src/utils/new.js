function myNew(constructor) {
  let obj = {};
  obj.setPrototypeOf(constructor.prototype);
  let args = arguments.slice(1);
  let res = constructor.apply(obj, args);
  let isObject = typeof res === "object" && res !== null;
  let isFunction = typeof res === "function";
  if (isObject || isFunction) {
    return res;
  } else {
    return obj;
  }
}

export default myNew;
