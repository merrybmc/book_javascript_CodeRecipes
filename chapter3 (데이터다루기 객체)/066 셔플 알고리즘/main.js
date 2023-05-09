const array = [1, 2, 3, 4, 5];

const arrayLength = array.length;

for (let i = arrayLength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}

// console.log(array);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1);

const array2 = ["사자", "곰", "여우", "호랑이", "기린"];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2);

function shuffleArray(source) {
  const array = source;

  const arrayLength = array.length;

  for (let i = arrayLength - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
