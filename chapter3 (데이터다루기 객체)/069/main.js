const object1 = {
  result: true,
  members: [
    { id: 1, name: "여우" },
    { id: 2, name: "호랑이" },
    { id: 3, name: "고양이" },
  ],
};

const copiedObject1 = Object.assign({}, object1);
const copiedObject2 = object1;
const copiedObject3 = { ...object1 };
console.log(copiedObject1);
console.log(copiedObject2);
console.log(copiedObject3);
