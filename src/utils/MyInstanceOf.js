function MyInstanceOf(obj, Construe) {
  const baseType = ["string", "number", "boolean", "undefined", "symbol"];
  if (baseType.includes(typeof obj)) {
    return false;
  }

  let pro = Construe.prototype;
  let _pro_ = Object.getPrototypeOf(obj);
  while (true) {
    if (_pro_ === null) {
      return false;
    }
    if (pro === _pro_) {
      return true;
    }
    _pro_ = Object.getPrototypeOf(_pro_);
  }
}

export default MyInstanceOf;
