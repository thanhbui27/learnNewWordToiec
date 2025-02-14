var arr = [3, 5, 2, 21, 6, 7, 34, 41, 5, 6, 7, 8, 99];

var bubbleSort = () => {
  let tempArr = arr.slice(0);
  var length = tempArr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
      }
    }
  }

  //i = 0
  //3 2 5 6 7 21 34 5 6 7 8 41 99
  //i = 1
  //3 2 5 6 7 21 5 6 7 8 34 41 99
  // i = 2
  // 3 2 5 6 7 5 6 7 8 21 34 41 99
  return tempArr;
};

var insertSort = () => {
  let tempArr = arr.slice(0);
  var length = tempArr.length;

  for (let i = 0; i < length - 1; i++) {
    let key = tempArr[i + 1];
    let j = i;
    while (j >= 0 && tempArr[j] > key) {
      tempArr[j + 1] = tempArr[j];
      j--;
    }
    tempArr[j + 1] = key;
  }

  return tempArr;
};

var selectSort = () => {
  let tempArr = arr.slice(0);
  var length = tempArr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < length - 1; j++) {
      if (tempArr[j] < tempArr[minIndex]) minIndex = j;
    }
    let temp = tempArr[minIndex];
    tempArr[minIndex] = tempArr[i];
    tempArr[i] = temp;
  }

  return tempArr;
};

console.log("array default : " + arr);
console.log("after use bubble sort : " + bubbleSort());
console.log("after use insert sort : " + insertSort());
console.log("after use select sort : " + selectSort());
