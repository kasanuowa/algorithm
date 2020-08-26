const firstUniqChar1 = s => {
  for (const key in new Set(s)) {
    if (s.match(new RegExp(key, "g")).length === 1) {
      return key;
    }
  }
  return " ";
};

const firstUniqChar2 = s => {
  let i = 0;
  for (; i < s.length; i++) {
    if (
      s.slice(0, i).indexOf(s[i]) === 1 &&
      s.slice(i + 1).indexOf(s[i]) === 1
    ) {
      break;
    }
  }
  return s[i] ?? " ";
};

export { firstUniqChar1, firstUniqChar2 };
