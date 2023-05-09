function myFunction1(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

let myValue1 = myFunction1(100);
console.log(myValue1);

var myValue2 = myFunction1(100, 0.1);
console.log(myValue2);

// // // // // // // // // // // // //

function myFunction2(price, tax = 0.1) {
  price = 500;
  let result = price + price * tax;
  return result;
}

const myValue3 = myFunction2(100);
console.log(myValue3);
const myValue4 = myFunction2();
console.log(myValue4);
