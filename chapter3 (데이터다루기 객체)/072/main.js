const Data = { id: 1, name: "사자", age: 26 };

const { id, name, age } = Data;

console.log(id);
console.log(name);
console.log(age);

const { name: myName } = Data;
console.log(myName);
