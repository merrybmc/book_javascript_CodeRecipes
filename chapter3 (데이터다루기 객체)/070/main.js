const userData = {
  id: 1,
  name: "사자",
  age: 26,
};

console.log(userData.hasOwnProperty("id"));
console.log(userData.hasOwnProperty("address"));
console.log("name" in userData);
