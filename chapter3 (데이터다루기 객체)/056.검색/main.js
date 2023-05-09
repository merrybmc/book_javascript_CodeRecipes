const myArray = ["곰", "사자", "여우", "원숭이", "사자"];

const target = myArray.find((element) => element == "사자");
console.log(target);

const targetIndex = myArray.findIndex((element) => element == "사자");
console.log(targetIndex);
