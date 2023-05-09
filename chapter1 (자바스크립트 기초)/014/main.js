function Sum(...prices) {
  let result = 0;
  //   for (const value of prices) {
  //     result += value;
  //     console.log(value);
  //   }
  for (i = 0; i < prices.length; i++) {
    result += prices[i];
    console.log(prices[i]);
  }
  return result;
}

const myValue = Sum(1, 2, 3);
console.log(myValue);
