// 1. Реалізувати метод .pow(n) для масиву 
//  при виклику якого – всі елементи масиву мають бути піднесенні до степеню n. 
//      Приклад [1,2,3].pow(2) => [1,4,9]

// 2. Додати до функції метод defer(n), який має виконати тіло функції через n мілісекунд. 
//      Приклад:
// function a() { alert(“test” );}
// a.defer(1000); // виведе “test” через 1 секунду

let linkPow = document.getElementById("pow");

Array.prototype.pow = function (x) {
    let result = [];
    this.map(function (el) {
        result += el ** x + " ";
    });
    return result;
};
const arr = [2, 3, 4, 5];
const result = arr.pow(2);

linkPow.innerText = result;
console.log(result);

Function.prototype.defer = function (delay) {
    let func = this;
    setTimeout(func, delay);
};
function a() {
    alert("test");
}
a.defer(1000);


