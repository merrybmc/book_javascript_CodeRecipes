const myPrice = 100;

if (myPrice >= 50) {
  console.log("myPrice는 50보다 큽니다.");
} else if (myPrice < 50) {
  console.log("myPirce는 50보다 작습니다.");
} else {
  console.log("값이 잘못 되었습니다.");
}

// // // // // // // // // // // // //

if (true) {
  console.log("안녕하세요!");
}

if (false) {
  console.log("안녕하세요!!");
}

// // // // // // // // // // // // //

const randomNum = Math.random() * 10;
if (randomNum >= 5) {
  console.log("5보다 큽니다. 값은 " + Math.ceil(randomNum) + " 입니다.");
} else if (randomNum < 5) {
  console.log("5보다 작습니다. 값은 " + randomNum + " 입니다.");
}
