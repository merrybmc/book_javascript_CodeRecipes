const array1 = ["grape", "apple", "orange"];

// array1.sort();
console.log(array1);

array1.sort((a, b) => a.localeCompare(b));
console.log(array1);

array1.sort((a, b) => b.localeCompare(a));
console.log(array1);
