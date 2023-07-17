let arr = [21, 30, 102, 8, 28, 11, 10, [15, 9], "text", 12];
let notString = [];
// check the area on "string" and creat new arr "notString"
let i = 0;
while (i < arr.length) {
  if (typeof (arr[i]) !== "string" && typeof (arr[i]) !== "object") notString.push(arr[i]);
  i++;
}
console.log("_____us area_____");
console.log(arr);
console.log("___New area without 'string'___");
console.log(notString);
// variable
let sum = notString[0];
let min = notString[0];
let max = notString[0];
// sum value
let k = 1;
do {
  sum = sum + notString[k];
  k++;
}
while (k < notString.length);
console.log("sum value  -  " + sum);
// max/min value
for (i = 1; i < notString.length; i++) {
  if (notString[i] <= min) min = notString[i];
  else if (notString[i] > max) max = notString[i];
}
console.log("min value  -  " + min);
console.log("max value  -  " + max);
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


