function MyInstanceOf(obj, Construe) {
  let pro = Object.getPrototypeOf(Construe);
  while (true) {
    if (pro === null) {
      return false;
    }
    if (pro === Construe.prototype) {
      return true;
    }
    pro = Object.getPrototypeOf(pro);
  }
}

export default MyInstanceOf;
