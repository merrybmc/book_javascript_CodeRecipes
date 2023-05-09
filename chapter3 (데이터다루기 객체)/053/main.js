const array1 = ["곰", "사자"];
const array2 = ["여우", "호랑이"];
const array3 = [];
array3.push(array1);
array3.push(array2);
console.log(array3);

let array4 = [];
array4 = array4.concat(array1).concat(array2);
console.log(array4);

const array5 = ["곰", "사자"];
console.log([...array5]);

const array6 = ["여우", "호랑이"];
const array7 = [...array5, ...array6];
console.log(array7);
