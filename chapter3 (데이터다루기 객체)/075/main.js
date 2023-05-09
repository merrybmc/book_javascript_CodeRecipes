const array = [1, 2, 3];
array[0] = 100;
console.log(array);
// 가변성 객체 타입엔 1에 100을 대입하여 변경된다.

let number = 10;
number = 20;
console.log(number);
// 불가변성 원시 데이터 타입엔 10에 20을 대입하는 것이 아니라 새로운 데이터를 참조하는 것
