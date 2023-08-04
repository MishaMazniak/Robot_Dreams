console.log("_______ les-27 _________");

let arr = [21, 130, -99, 3, 28, 11, 10, [15, 9], "text", 12];

// check the area on "string" and creat new arr "notString"
function checkArrea(a) {
    let checkArr = [];
    let i = 0;
    while (i < a.length) {
        if (typeof (a[i]) === "number") checkArr.push(a[i]);
        i++;
    }
    return checkArr;
}
// check the value on "string"
const checkValue = (a) => {
    if (typeof a === "number") return a;
    else return false;
};

let myArrays = document.getElementById('my_arrays_info');

// us array
let divArrUs = document.createElement('div');
divArrUs.classList.add('us_array');
let arrLabel = document.createElement('label');
let myArr = document.createElement('div');

arrLabel.innerText = "My array is";
myArr.innerText = arr;

myArrays.append(divArrUs);
divArrUs.append(arrLabel);
divArrUs.append(myArr);

// New array after checkad
let newLable = document.getElementById('new_arr_lable');
newLable.innerText = "New area without 'string'";
let newArr = document.getElementById('new_arr');
newArr.innerText = checkArrea(arr);


console.log("_____us area_____");
console.log(arr);
console.log("___New area without 'string'___");
console.log(checkArrea(arr));
console.log("______________");

// sum value arrea +++
function sumValArr(el) {
    let nweAr = checkArrea(el);
    let sum = nweAr[0];
    let k = 1;
    do {
        sum = sum + nweAr[k];
        k++;
    }
    while (k < nweAr.length);
    return sum;
}
console.log("sum value  -  " + sumValArr(arr));

let mathSum = document.getElementById('sum');
let testArr = sumValArr(arr);
if (testArr > 0) {
    mathSum.classList.add("green");
    if (testArr > 200) {
        mathSum.style.color = "rgba(26, 254, 6, 1)";
        mathSum.style.fontWeight = "bold";
    }
    else if (testArr < 100) {
        mathSum.style.color = "rgba(58, 255, 36, 0.44)";
        mathSum.style.fontStyle = "italic";
    }
} else if (testArr < 0) {
    mathSum.classList.add("red");
    if (testArr < -200) {
        mathSum.style.color = "rgba(255, 0, 0, 0.8)";
        mathSum.style.fontWeight = "bold";
    }
    else if (testArr > -100) {
        mathSum.style.color = "rgba(255, 0, 0, 0.45)";
        mathSum.style.fontStyle = "italic";
    }
} else mathSum.style.color = "rgba(8, 0, 249, 1)";
mathSum.innerText = testArr;


// subtracting numbers ---
const subVal = (a, b) => {
    let val1 = checkValue(a);
    let val2 = checkValue(b);
    if ((val1 === 0 || !!val1) && (val2 === 0 || !!val2)) return (val1 - -val2);
    else return "Error";
};
let testSub = subVal(-15, 12);
console.log(testSub);
let mathSub = document.getElementById('sub');

if (testSub > 0) {
    mathSub.classList.add("green");
    if (testSub > 20) mathSub.classList.add("greenMax");
    else if (testSub < 5) mathSub.classList.add("greenMin");
} else if (testSub < 0) {
    mathSub.classList.add("red");
    if (testSub < -20) mathSub.classList.add("redMax");
    else if (testSub > -5) mathSub.classList.add("redMin");
}
mathSub.innerText = testSub;

// division of numbers ///
const divVal = (a, b) => {
    let val1 = checkValue(a);
    let val2 = checkValue(b);
    if (!!val1 && !!val2) return (val1 / val2);
    else return "Error";
};
let testdivision = divVal(-24, 2);
console.log(testdivision);
let mathDivision = document.getElementById('division');

if (testdivision > 0) {
    mathDivision.classList.add("green");
    if (testdivision > 10) mathDivision.classList.add("greenMax");
    else if (testdivision < 5) mathDivision.classList.add("greenMin");
} else if (testdivision < 0) {
    mathDivision.classList.add("red");
    if (testdivision < -10) mathDivision.classList.add("redMax");
    else if (testdivision > -5) mathDivision.classList.add("redMin");
}
mathDivision.innerText = testdivision;

// multiplication of numbers ***
const mulVal = (a, b) => {
    let val1 = checkValue(a);
    let val2 = checkValue(b);
    if ((val1 === 0 || !!val1) && (val2 === 0 || !!val2)) return (val1 * val2);
    else return "Error";
};
let testMult = mulVal(-3, 2);
console.log(testMult);
let mathMult = document.getElementById('mult_num');

if (testMult > 0) {
    mathMult.classList.add("green");
    if (testMult > 10) mathMult.classList.add("greenMax");
    else if (testMult < 5) mathMult.classList.add("greenMin");
} else if (testMult < 0) {
    mathMult.classList.add("red");
    if (testMult < -10) mathMult.classList.add("redMax");
    else if (testMult > -5) mathMult.classList.add("redMin");
}
mathMult.innerText = testMult;

// max value with arrea
const maxValArr = (el) => {
    let newArr = checkArrea(el);
    let max = newArr[0];
    for (i = 1; i < newArr.length; i++) {
        if (newArr[i] >= max) max = newArr[i];
    };
    return max;
};
let testMax = maxValArr(arr);
console.log("Max value - " + testMax);
let maxVal = document.getElementById('max_val');

if (testMax > 0) {
    maxVal.classList.add("green");
    if (testMax > 200) maxVal.classList.add("greenMax");
    else if (testMax < 100) maxVal.classList.add("greenMin");
} else if (testMax < 0) {
    maxVal.classList.add("red");
    if (testMax < -200) maxVal.classList.add("redMax");
    else if (testMax > -100) maxVal.classList.add("redMin");
}
maxVal.innerText = testMax;

// min value with arrea
const minValArr = (el) => {
    let newArr = checkArrea(el);
    let min = newArr[0];
    let i = 1;
    while (i < newArr.length) {
        if (newArr[i] <= min) min = newArr[i];
        i++;
    }
    return min;
};
let testMin = minValArr(arr);
console.log("Min value - " + testMin);
let minVal = document.getElementById('min_val');

if (testMin > 0) {
    minVal.classList.add("green");
    if (testMin > 200) minVal.classList.add("greenMax");
    else if (testMin < 100) minVal.classList.add("greenMin");
} else if (testMin < 0) {
    minVal.classList.add("red");
    if (testMin < -200) minVal.classList.add("redMax");
    else if (testMin > -100) minVal.classList.add("redMin");
}
minVal.innerText = testMin;