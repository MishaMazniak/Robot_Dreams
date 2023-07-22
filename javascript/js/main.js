let arr = [21, 130, 99, 3, 28, 11, 10, [15, 9], "text", 12];

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
  console.log("sum value  -  " + sum);
}
sumValArr(arr);

// subtracting numbers ---
const subVal = (a, b) => {
  let val1 = checkValue(a);
  let val2 = checkValue(b);
  if ((val1 === 0 || !!val1) && (val2 === 0 || !!val2)) console.log("sub value  -  " + (val1 - val2));
  else console.log("Error");
};
subVal(8, 4);

// division of numbers ///
const divVal = (a, b) => {
  let val1 = checkValue(a);
  let val2 = checkValue(b);
  if (!!val1 && !!val2) console.log("dib value  -  " + (val1 / val2));
  else console.log("Error");
};
divVal(10, 2);

// multiplication of numbers ***
const mulVal = (a, b) => {
  let val1 = checkValue(a);
  let val2 = checkValue(b);
  if ((val1 === 0 || !!val1) && (val2 === 0 || !!val2)) console.log("mul value  -  " + (val1 * val2));
  else console.log("Error");
};
mulVal(3, 2);

// max value with arrea
const maxValArr = (el) => {
  let newArr = checkArrea(el);
  let max = newArr[0];
  for (i = 1; i < newArr.length; i++) {
    if (newArr[i] >= max) max = newArr[i];
  };
  console.log("Max value - " + max);
};
maxValArr(arr);

// min value with arrea
const minValArr = (el) => {
  let newArr = checkArrea(el);
  let min = newArr[0];
  let i = 1;
  while (i < newArr.length) {
    if (newArr[i] <= min) min = newArr[i];
    i++;
  }
  console.log("Min value - " + min);
};
minValArr(arr);

console.log("______________");
// #
// ##
// ###
// ####
// #####
let symb = "#";
for (let i = 0; i < 5; i++) {
  console.log(symb);
  symb = symb + "#";
}

