// function add(a, b) {
//   return a + b;
// }

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;
console.log('result :', add(3, 4));

const multiply = (x) => x * x;
console.log('result :', multiply(4));

// anonymous function >>>>>>>>>>

setTimeout(function () {
  console.log('3s passed');
}, 3000);

setTimeout(() => {
  console.log('4s passed');
}, 4000);

//   Self Invoked Anonymous Functions
(function () {
  console.log('i am self invoked anonymous function');
})();
(() => {
  console.log('i am self invoked anonymous function 2');
})();

const Person = {
  firstName: 'sajeewa',
  LastName: 'Garusinghe',
  setName: function () {
    console.log('full name:', this.firstName, this.LastName);
    (function () {
      console.log(
        'i am the self invoked func inside Person belong to :',
        this.firstName
      );
    })(); //self invoked function No 1
    (() => {
      console.log(
        'i am the self invoked func inside Person belong to :',
        this.firstName
      );
    })(); //self invoked function No 2 with arrow notaion
    //you cn see clerely only self invoked arrow function can access propertie of object it belongs to
  },
};
Person.setName();
