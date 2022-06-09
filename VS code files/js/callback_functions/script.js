function func_1(callback) {
  console.log('this is func_1');
  const randNum=Math.random();
  callback(randNum);
}

function func_2(randNum) {
  console.log('this is func_2');
  console.log(randNum);
}
function func_3() {
  console.log('this is func_3');
}

func_1(func_2);