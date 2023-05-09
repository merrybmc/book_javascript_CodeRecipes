const a = 10;
const b = 20;
console.log(a == b);
console.log(a == b - 10);

// // // // // // // // // // // // //

const userName = "홍길동";
if (userName) {
  console.log(`"안녕하세요!" ${userName}`);
}

const address = "대한민국";
if (address) {
  console.log(`당신은 ${address}에 살고 계시네요.`);
}

// // // // // // // // // // // // //

// 자바스크립트의 문자열에 @ 과 . 포함 여부
const myEmail = "chobm1027@naver.com".includes("@");
const myEmail2 = "chobm1027@naver.com";
const myEmail2_1 = myEmail2.includes("@");
const myEmail2_2 = myEmail2.includes(".");
console.log(myEmail);
console.log(myEmail2_1 == myEmail2_2);
