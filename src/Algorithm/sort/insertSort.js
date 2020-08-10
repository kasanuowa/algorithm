function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let minIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[minIndex] < array[j]) {
        [array[minIndex], array[j]] = [array[j], array[minIndex]];
        minIndex = j;
      } else {
        break;
      }
    }
  }
  return array;
}

export default insertSort;
