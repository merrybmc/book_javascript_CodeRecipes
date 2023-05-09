function myFunction(a) {
  const result = a + 2;
  return result;
}

myValue = myFunction(5);
console.log("1 : " + myValue);

// // // // // // // // // // // // //

function myFunction2(a, b, c) {
  const result = a + b + c;
  return result;
}

myValue2 = myFunction2(1, 2, 4);
console.log("2 : " + myValue2);

// // // // // // // // // // // // //

function myFunction3() {
  console.log("3 : 안녕하세요!");
  return 100;
}

myValue3 = myFunction3();
console.log("3 : " + myValue3);

// // // // // // // // // // // // //

function myFunction4(a) {
  console.log("4 : 안녕하세요!!");
}

myFunction4();

// // // // // // // // // // // // //

function myFunction5() {
  return 200;

  // return 구문으로 함수가 종료되기 때문에 실행되지 않는다.
  console.log("5 : 안녕하세요?");
}

myValue5 = myFunction5();
console.log("5 : " + myValue5);

// // // // // // // // // // // // //

function myFunction6(a, b) {
  // a가 100 이상이라면 a를 반환
  if (a >= 100) {
    return a;
  }
  return b;
}

myValue6_1 = myFunction6(101, 200);
console.log("6_1 : " + myValue6_1);

myValue6_2 = myFunction6(99, 200);
console.log("6_2 : " + myValue6_2);

// // // // // // // // // // // // //

function myFunction7(price, tax) {
  const result = price + price * tax;
  return result;
}

myValue7 = myFunction7(100, 0.1);
console.log("7 : " + myValue7);

// // // // // // // // // // // // //
