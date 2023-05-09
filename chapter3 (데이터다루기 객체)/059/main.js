const userDataList = [
  { id: 1, name: "곰" },
  { id: 3, name: "사자" },
  { id: 2, name: "여우" },
  { id: 5, name: "호랑이" },
  { id: 4, name: "토끼" },
];

userDataList.sort((a, b) => {
  return a - b;
});
