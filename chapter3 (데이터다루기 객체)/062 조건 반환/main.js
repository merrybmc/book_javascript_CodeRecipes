let array1 = [10, 20, 30, 40];

array2 = array1.filter((value) => value >= 30);

array3 = array1.filter((value) => {
  return value >= 30;
});

console.log(array2);
