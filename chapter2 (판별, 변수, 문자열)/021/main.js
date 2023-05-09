let a = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]];

let b = [1, 2, 3, 4, 5];
let c = [1, 2, 3, 4, 5];
b.push(c);

console.log(a);
console.log(b);
console.log(a[5][0]);
