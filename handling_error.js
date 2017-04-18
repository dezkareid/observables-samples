'use strict'

const Rx = require('rx');

let observable_from_array = Rx.Observable.from([1,2,3,4,5]);

//Puedo hacer un catch del error
observable_from_array
  .map((num)=> {
    throw new Error("error");
  })
  .filter( num => {
    return num % 2 === 0;
  })
  .catch( error => {
    return Rx.Observable.of('ya bailo')
  })
  .subscribe ( num => {
    console.log(num);
  }, error => {
    console.log(error+ "soy un error");
  });

//O puedo manejarlo en el suscribe
observable_from_array
  .map((num)=> {
    throw new Error("error");
  })
  .filter( num => {
    return num % 2 === 0;
  })
  .subscribe ( num => {
    console.log(num);
  }, error => {
    console.log("soy un error");
  });