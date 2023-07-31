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
    this.volum--;
  };
}
Accumulator.prototype.increment = function () {
  this.volum++;
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

console.log("___decrement____");
liIon.decrement();
liIon.decrement();
console.log(liIon.volum);
liIon.decrement();
liIon.decrement();
console.log(liIon.volum);

console.log("____increment_____");
console.log(liIon.volum);
liIon.increment();
liIon.increment();
liIon.increment();
liIon.increment();
console.log(liIon.volum);

console.log("_____clear_______");
console.log(liIon.volum + "-Ach");
console.log(liIon2.clear() + "-Ach");
