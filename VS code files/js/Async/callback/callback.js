


let order = (call_production) => {
  console.log('ordering done.plz call production');
  call_production();
};

let production = () => {
  console.log('production done');
  console.log('production done plz call serve');
 
};




order(production);
