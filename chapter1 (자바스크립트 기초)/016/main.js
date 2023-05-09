const myFruit = "사과2";

switch (myFruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "딸기":
    console.log("딸기입니다.");
    break;
  case "사과2":
  case "딸기":
    console.log("사과 혹은 딸기입니다.");
    break;
  default:
    console.log("값이 잘못되었습니다.");
    break;
}

const myValue = 100; // myValue = '100'

switch (myValue) {
  case 100:
    console.log("숫자 100입니다.");
    break;
  case "100":
    console.log("문자 100입니다.");
    break;
}
