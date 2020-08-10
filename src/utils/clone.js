const clone = (prefab, map = new WeakMap()) => {
  if (typeof prefab !== "object") {
    return prefab;
  }
  let obj = Array.isArray(prefab) ? [] : {};
  if (map.get(prefab)) {
    return map.get(prefab);
  }
  map.set(prefab, obj);
  for (const key in prefab) {
    obj[key] = clone(prefab[key], map);
  }
  return obj;
};

export default clone;
