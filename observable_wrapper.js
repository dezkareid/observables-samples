const Rx = require('rx');

function getObservableFromArray(array) {
	return Rx.Observable.create(function(observer) {
		if (array && array instanceof Array){
			array.forEach( item => observer.onNext(item));
			observer.onCompleted();
		} else {
			observer.onError(new Error("Arreglo no valido"));
		}	
	});
}

var test = getObservableFromArray([1, 2, 3]);

test.subscribe(
	function onNext(x) { console.log('item: ' + x); },
	function onError(err) { console.log('error: ' + err); }, 
	function onCompleted() { console.log('completed'); }
);
