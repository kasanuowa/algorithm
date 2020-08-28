const result = [];
let total = 0;

const closure = n => {
  for (var i = 0; i < n; i++) {
    result[i] = function () {
      total += i * n;
      console.log(total);
    };
  }
};

closure(3);
result[0]();
result[1]();
result[2]();

// use let replace var
const closureLet = n => {
  for (let i = 0; i < n; i++) {
    result[i] = function () {
      total += i * n;
      console.log(total);
    };
  }
};

closureLet(3);
result[0]();
result[1]();
result[2]();

// use IIFE

const closureIIFE = n => {
  for (var i = 0; i < n; i++) {
    result[i] = (function () {
      total += i * n;
      console.log(total);
    })();
  }
};

closureIIFE(3);
result[0]();
result[1]();
result[2]();
