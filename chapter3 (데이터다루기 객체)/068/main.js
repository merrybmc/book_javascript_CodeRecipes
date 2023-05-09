const object = {};

const person = { id: 1, name: "거북이", age: 28 };
const person2 = [
  { id: 1, name: "거북이", age: 28 },
  { id: 2, name: "사자", age: 35 },
];

console.log(person.name);
console.log(person2[1].age);

person2[0].id = 3;
person2[0]["name"] = "호랑이";
console.log(person2[0]);

const response = {
  result: true,
  list: [
    { id: 1, name: "호랑이", age: 26 },
    { id: 2, name: "사자", age: 35 },
  ],
};

console.log(response.result);
console.log(response["result"]);
console.log(response.list[0]);

response.list[1].name = "고양이";
console.log(response.list[1]);

const myClass = {
  method1: function () {
    console.log("메소드1 실행");
  },
  method2: function () {
    console.log("메소드2 실행");
  },
};

myClass.method2();
