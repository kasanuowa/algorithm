function myNew(constructor) {
  let obj = Object.create(constructor.prototype);
  let args = [].slice.call(arguments, 1);
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
