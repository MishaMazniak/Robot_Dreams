console.log("_______ les-26 _________");

// 1. Створити конструктор Accumulator.
// Даний конструктор має приймати число,
// яке буде початковим значенням. Клас має
// реалізувати методи increment, при виклику якого
// передане значення має збільшуватись на 1, та decrement,
// при виклиці якого значення має зменшуватись.

// 2. Створити конструктор CancelableAccumulator, 
// який буде наслідувати Accumulator та додатково 
// буде реалізовувати метод clear, при виклику якого 
// значення збереженого числа має стати таким, 
// яким його передали в конструкторі.

function Accumulator(volum) {
  this.volum = volum;
  this.decrement = function () {
    return volum - 1;
  };
}
Accumulator.prototype.increment = function () {
  return this.volum + 1;
};

function CancelableAccumulator(volum) {
  Accumulator.call(this, volum);
  this.clear = function () {
    return this.volum;
  };
}
CancelableAccumulator.prototype = Accumulator.prototype;

const liIon = new Accumulator(100);
const liIon2 = new CancelableAccumulator(72);


console.log(liIon);
console.log(liIon2);
console.log(liIon.increment());
console.log(liIon.decrement());

console.log(liIon.volum + "-Ach");
console.log(liIon2.clear() + "-Ach");

console.log("____________");

function FastLoad(volum, val) {
  Accumulator.call(this, volum);
  this.speadLoad = val;
  this.timeLoad = function () {
    console.log(this.speadLoad * 60 + " - min");
  };
}
FastLoad.prototype = Accumulator.prototype;

const fastBatery = new FastLoad(84, 2);
console.log(fastBatery);
fastBatery.timeLoad();