const object = { id: 10, name: "사자" };
object.id = 12;
object.name = "호랑이";
console.log(object);

Object.freeze(object);
object.id = 15;
object.name = "토끼";
console.log(object);

console.log(Object.isFrozen(object));
