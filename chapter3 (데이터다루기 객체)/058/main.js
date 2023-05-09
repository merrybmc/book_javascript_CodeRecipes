const array1 = [1, 3, 2, 4, 6, 5];

array1.sort((a, b) => {
  return a - b;
});

console.log(array1);

array1.sort((a, b) => {
  return b - a;
});

console.log(array1);
