function Super(name) {
  this.name = name;
  this.sex = "meal";
  this.sayName = function () {
    console.log(name);
  };
}

Super.prototype.saySex = function () {
  console.log(this.sex);
};

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

Object.setPrototypeOf(Sub.prototype, Super.prototype);

let instance = new Sub("xiejin", 26);
