function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let max_index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[max_index] < array[j]) {
        [array[j], array[max_index]] = [array[max_index], array[j]];
        max_index = j;
      } else {
        break;
      }
    }
  }
  return array;
}

export default insertSort;
