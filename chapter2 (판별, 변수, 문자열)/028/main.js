const targetString1 = "   안녕하세요   ";
const trimmedString1 = targetString1.trim();
console.log(targetString1);
console.log(trimmedString1);

const targetString2 = "사과를 먹었어요\n 맛있게 먹었어요";
const trimmedString2 = targetString2.trim();
console.log(targetString2);
console.log(trimmedString2);

// 문자열 사이 공백은 제거되지 않음
const targetString3 = "사과, 귤, 바나나";
const trimmedString3 = targetString3.trim();
console.log(targetString3);
console.log(trimmedString3);
