const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 47, 88, 99];
function checkPrice(price) {
  if (price < 7) {
    return true;
  }
}
const approvedPrices = prices.filter(checkPrice);

const highPrices = prices.filter((price) => price > 7);

console.log(prices);
console.log(approvedPrices);
console.log(highPrices);

const cars = [
  { brand: 'honda', model: 'axio', year: 2017 },
  { brand: 'mazda', model: 'puls', year: 2013 },
  { brand: 'toyota', model: 'primio', year: 2011 },
  { brand: 'toyota', model: 'axela', year: 2012 },
  { brand: 'honda', model: 'primio', year: 2009 },
  { brand: 'bajaj', model: 'pulzar', year: 2019 },
];

//print abov object as a table in console
console.table(cars);

const oldCars = cars.filter((car) => car.year < 2013);
console.table(oldCars);
