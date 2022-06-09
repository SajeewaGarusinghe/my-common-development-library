const prices = [23, 45, 67, 89, 23, 56];

const pricesWithVAT = prices.map((price) => {
  return (price * 1.56).toFixed();
});
console.log(pricesWithVAT);
