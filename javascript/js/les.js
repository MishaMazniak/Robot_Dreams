console.log("______ lesson_25 ________");
let ob = {
    name: "Misha",
    age: 32,
    number: 123,
    fullName: {
        name: "Misha",
        age: 32,
        number: 123
    }
};
ob.live = "Wroclaw";
for (const key in ob) {
    console.log(key);
    // console.log(ob[key]);
    // for (const fullN in ob.fullName) {
    //   console.log(ob["fullName"][fullN]);
    // }
}
console.log("______________");

let a = {
    x: 1,
    y: 2
};
let b = Object.assign({}, a);
// let b = { ...a };

b.z = 5;

console.log(a);
console.log(b);
a.y = null;
console.log(a);
for (let key in a) {
    console.log(a[key]);
}
console.log("_______this_______");

// console.log(window);
// if (innerWidth === 822) {
//     console.log("Hello");
// }
