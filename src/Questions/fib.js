/**
 * @param {number} n
 * @return {number}
 */
var fib1 = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let tem = a;
    a = b;
    b = (b + tem) % 1000000007;
  }
  return b;
};

const fib2 = n => {
  const array = Array(n + 1).fill(0);
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < array.length; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
};

export { fib1, fib2 };
