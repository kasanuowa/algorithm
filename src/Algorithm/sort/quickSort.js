function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let target = array[0];
  let left = [];
  let right = [];
  for (let index = 1; index < array.length; index++) {
    if (array[index] < target) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  }
  return [...quickSort(left), target, ...quickSort(right)];
}

export default quickSort;
