//basic for loop

// for (let i = 0; i < 12; i++){
//     console.log(i*12);
// }

const printers = ['canon', 'hp', 'dell', 'epson', 'xerox'];

//using normal for loop
for (let i = 0; i < printers.length; i++) {
  console.log(i, printers[i]);
}
// 0 canon
// 1 hp
// 2 dell
// 3 epson
// 4 xerox

//using destructing and for of loop
for (const [index, value] of printers.entries()) {
  console.log(index, value);
}
// 0 canon
// 1 hp
// 2 dell
// 3 epson
// 4 xerox

const movie = {
  title: 'castaway',
  actor: 'tom hanks',
  genre: 'story',
  year: '2004',
};

for (const key in movie) {
  console.log(key, movie[key]);
}
