let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('sucess');
  } else {
    reject('failed');
  }
});

p.then((message) => {
  console.log('this is in then & ' + message);
}).catch((message) => {
  console.log('this is in the catch & ' + message);
});

const record1 = new Promise((resolve, reject) => {
  resolve('video 1 recoreded');
});

const record2 = new Promise((resolve, reject) => {
  resolve('video 2 recoreded');
});

const record3 = new Promise((resolve, reject) => {
  resolve('video 3 recoreded');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos').then(
  (res) => res.json()
);

Promise.all([record1, record2, record3, promise4]).then((messages) => {
  console.log(messages);
});

console.log('checking promise.race() function >>>>>>>>>>>');

Promise.race([record1, record2, record3, p]).then((messages) => {
  console.log(messages);
});


//Async/Await