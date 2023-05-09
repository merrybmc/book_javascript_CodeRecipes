const idList = [4, 10, 20];

const userIdList = idList.map((value) => `userid_${value}`);
console.log(userIdList);

const idList2 = [3, 8, 12];
const userIdList2 = idList2.map((value, index) => `Index(${index}) : ${value}`);

console.log(userIdList2);

const dataList = [
  { id: 10, name: "곰", address: "서울" },
  { id: 21, name: "사자", address: "대구" },
  { id: 31, name: "여우", address: "부산" },
];

const idList3 = dataList.map((value) => value.id);
const idList4 = dataList.map((value) => (value.address == "부산" ? value.name : ""));
console.log(idList3);
console.log(idList4);
