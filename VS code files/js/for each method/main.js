function addTax(price, index, array) {
  console.log(index, (price * 1.15).toFixed(2), array);
}

const prices = [112, 235, 351, 896];
//using basic forEach method
prices.forEach(addTax);

//using arrow function with for each method
prices.forEach((p, i, a) => console.log(i+4, (p * 1.15).toFixed(4), a));

//for (...of ) loops is also can be used for this .its easier than thi.easy to read