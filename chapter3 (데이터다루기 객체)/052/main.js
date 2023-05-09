const array1 = ["사과", "귤"];
array1.splice(0, 0, "바나나");
console.log(array1);

const array2 = ["사과", "귤"];
array2.splice(1, 1, "바나나", "딸기");
console.log(array2);

const array3 = ["사과", "귤", "바나나", "딸기"];
array3.splice(2, 1);
console.log(array3);
