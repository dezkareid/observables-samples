'use strict'

const Rx = require('rx');

let observable_from_array = Rx.Observable.from([1,2,3,4,5]);

observable_from_array
  .map((num)=> {
    throw new Error("error");
  })
  .filter( num => {
    return num % 2 === 0;
  })
  .catch( error => {
    return Rx.Observable.just('ya bailo')
  })
  .subscribe ( num => {
    console.log(num);
  }, error => {
    console.log(error);
  });