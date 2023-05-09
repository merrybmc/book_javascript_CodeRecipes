// 원시 타입 = 값의 전달 방식
// let a1 = 100;
// let b1 = a1;
// a1 = 500;
// console.log(b1);

// 객체 타입 참조에 의한 전달 방식
let a = [1, 2, 3];
// let b = a;
let b = a.sort((a, b) => {
  return a - b;
});

a[0] = 100;
console.log(b);

b[0] = 300;
console.log(a);
