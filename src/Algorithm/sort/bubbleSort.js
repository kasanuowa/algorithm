function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = false;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    if (flag) {
      break;
    }
  }
  return array;
}

export default bubbleSort;
