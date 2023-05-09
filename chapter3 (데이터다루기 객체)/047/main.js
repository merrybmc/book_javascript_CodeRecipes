const array1 = ["딸기", "귤", "사과"];

const array2 = [
  ["딸기", "귤", "사과"],
  ["사자", "호랑이", "곰"],
];

array1.forEach((x, y) => {
  console.log(x, y);
});

array2.forEach((x, y) => {
  console.log(x, y);
});

const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
let array4 = [];
array3.filter((value) => (value % 2 === 0 ? array4.push(value) : ""));
console.log(array4);

array4.forEach((x) => {
  console.log(x);
});

const array5 = [1, 2, 3, 4, 5];
let sum = 0;
array5.forEach((x) => {
  sum += x;
});

console.log(sum);
