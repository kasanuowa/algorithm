let obj = { a: 1, b: 3, c: 4 };

const helper = (p) => {
  console.log(
    Object.fromEntries(Object.entries(obj).filter(([key, value]) => value > 2))
  );
};

helper(obj);
