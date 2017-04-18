const Rx = require('rx');

let observable_from_array = Rx.Observable.from([1,2,3,4,5]);

let observable_from_array_mapped = observable_from_array
    .map ((item) => item * 2);

observable_from_array_mapped
    .subscribe ((num) => {
        console.log(num);
    });