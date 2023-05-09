// 화살표 함수
// 장점 : this를 묶는 것이 가능하다.

const Sum = (a, b, c) => {
  const result = a + b + c;
  return result;
};

myValue1 = Sum(1, 2, 3);
console.log(myValue1);

// // // // // // // // // // // // //

const myFunction1 = (a) => {
  return a + 2;
};

myValue2 = myFunction1(5);
console.log(myValue2);

// // // // // // // // // // // // //

const myFunction2 = (b) => b + 3;

myValue3 = myFunction2(5);
console.log(myValue3);
