const Super = function () {
  this.name = "xxx";
  this.say = () => alert("hi");
};

Super.prototype.age = 16;

const Sub = function () {
  Super.call(this);
  this.sax = "male";
};

Object.setPrototypeOf(Sub.prototype, Super.prototype);
const test = new Sub();
