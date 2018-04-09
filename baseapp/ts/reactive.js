var Rx = require('rxjs/Rx')     // Definicion para Node
//import * as Rx from 'rxjs/Rx' //Equivalente a ES6

let aDatos = [1,2,3,4,5,6];


const observable = Rx.Observable
.from(aDatos)
.map( x => x*x)
.filter(x=> x > 15);

/* const observador = Rx.Observer.create(
    function onNext(x) {console.log('Next:' + x)},
    function onError(err) {console.log('Err:' + err)},
    function onCompleted() {console.log('Completed')}
); */

observable.subscribe(
    function onNext(x) {console.log('Next:' + x)},
    function onError(err) {console.log('Err:' + err)},
    function onCompleted() {console.log('Completed')}
);