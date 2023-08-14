//  Homework lesson_30

// task from lesson_23

let arr = [21, 30, 102, 8, 28, 11, 10, [15, 9], "text", 12];
// check the area on "string" and creat new arr "notString"
function checkArray(arr) {
    let notString = [];
    let i = 0;
    while (i < arr.length) {
        if (typeof (arr[i]) !== "string" && typeof (arr[i]) !== "object") notString.push(arr[i]);
        i++;
    }
    return notString;
}
let checkArr = checkArray(arr);
// sum value
function sumVal(arrCheck) {
    let sum = arrCheck[0];
    let k = 1;
    do {
        sum = sum + arrCheck[k];
        k++;
    }
    while (k < arrCheck.length);
    return sum;
}
let sumResoult = sumVal(checkArr);
// max/min value
function minMaxVal(checkMaxOnArr) {
    let min = checkMaxOnArr[0];
    let max = checkMaxOnArr[0];
    for (i = 1; i < checkMaxOnArr.length; i++) {
        if (checkMaxOnArr[i] <= min) min = checkMaxOnArr[i];
        else if (checkMaxOnArr[i] > max) max = checkMaxOnArr[i];
    }
    return max;
}
let maxValue = minMaxVal(checkArr);

// task from lesson_26

function Accumulator(volum) {
    this.volum = volum;
    this.decrement = function () {
        this.volum--;
        return this.volum;
    };
}
Accumulator.prototype.increment = function () {
    this.volum++;
    return this.volum;
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
let checkFunDecrement = liIon.decrement();
liIon.decrement();
console.log(liIon.volum);
liIon.decrement();
liIon.decrement();
console.log(liIon.volum);

console.log("____increment_____");
console.log(liIon.volum);
let checkFunIncrement = liIon.increment();
liIon.increment();
liIon.increment();
liIon.increment();
console.log(liIon.volum);

console.log("_____clear_______");
console.log(liIon.volum + "-Ach");
console.log(liIon2.clear() + "-Ach");
let clearFunc = liIon2.clear();

// task from lesson_28

let mainImgEvent = document.querySelectorAll('.main_menu img');
mainImgEvent.forEach(myFunction);

let chenchClass = true;
function myFunction(item) {
    item.addEventListener('click', function () {
        mainImgEvent.forEach((el) => {
            el.classList.remove("img_food_js");
        });
        if (chenchClass) {
            item.classList.add("img_food_js");
            chenchClass = !chenchClass;
        } else chenchClass = !chenchClass;
    });
}
// export from app;
module.exports = {
    checkArr: checkArr,
    sumResoult: sumResoult,
    maxValue: maxValue,
    checkFunDecrement: checkFunDecrement,
    checkFunIncrement: checkFunIncrement,
    clearFunc: clearFunc,
    myFunction: myFunction,
};

