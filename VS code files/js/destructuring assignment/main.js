const weekdays = ['mon', 'tue', 'wed', 'thurs', 'frid',"sat", "sun" ];

let [first,second,,,fifth,...others]=weekdays;

console.log(first);
console.log(second);
console.log(fifth);
console.log(others);

////////////////////////////////

 const car={
     make:'honda',
     model:'accord',
     year:'2020',
     engine:{
         capacity:'1000cc',
         type:'v6'
     }
 }

 const{make,model,engine}=car;

 console.log(make);
 console.log(model)
 console.log(engine);
 ///////////////////

 function add([num1, num2]) {
    console.log(`addition equls to=${num1 + num2}`);
  }
  const nums = [34, 23];
  add(nums);


  function calcProfit({cost,salesPrice}) {
    console.log(`profit equls to=${salesPrice-cost}`);
  }

  const book={
      cost:350,
      salesPrice:560
  }

  calcProfit(book)