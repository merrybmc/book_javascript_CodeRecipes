const priceList = [100, 500, 900];

const sum = priceList.reduce((previous, current) => previous + current);
console.log(sum);

let sum2 = 0;
for (const price of priceList) {
  sum2 += price;
}
console.log(sum2);

const array = [
  ["바나나", "사과", "딸기"],
  ["귤", "포도"],
];

const flattenedArray = array.reduce((previous, current) => previous.concat(current));
console.log(flattenedArray);

const array2 = ["사과", "여우", "호랑이"];
const rightReduce = array2.reduceRight((previous, current) => previous + current);
console.log(rightReduce);

array2.reduceall;
