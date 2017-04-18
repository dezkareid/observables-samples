//Primero importamos rx
const Rx = require('rx');

//Los observables solo son streams de 'eventos'
let hello_observable = Rx.Observable.just("Hola amigos");

//Un observable no se ejecuta hasta que tenga al menos una suscripción
hello_observable
    .subscribe((message) => {
        console.log(message);
    });

hello_observable = Rx.Observable.of("Hola amigos, otra vez");

//Un observable no se ejecuta hasta que tenga al menos una suscripción
hello_observable
    .subscribe((message) => {
        console.log(message);
    });

//Los observables pueden tener diferentes fuentes

//Puede ser un arreglo
let observable_from_array = Rx.Observable.from([1,2,3,4,5]);

observable_from_array
    .subscribe ((num) => {
        console.log(num);
    });

//Puedes ser de un request
